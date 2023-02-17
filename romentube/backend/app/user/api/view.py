from rest_framework.views import APIView
from backend.app.user.api.serializers import UserSerializer, UserGetSerializer
from backend.app.user.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import datetime


@api_view(['GET', 'POST'])
def user_list(request):

    # GET list of users
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserGetSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # POST a new user
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):

    # queryset
    user = User.objects.filter(id=pk).first()

    # validations
    if not user:
        return Response('message: User not found', status=status.HTTP_404_NOT_FOUND)

    # retrieve
    elif request.method == 'GET':
        serializer = UserGetSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # update
    elif request.method == 'PUT':
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # delete
    elif request.method == 'DELETE':
        user.delete()
        return Response('message: User deleted', status=status.HTTP_204_NO_CONTENT)


class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        user = User.objects.filter(username=request.data['username']).first()
        if user:
            if user.check_password(request.data['password']):
                payload = {
                    'id': user.id,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                    'iat': datetime.datetime.utcnow()
                }

                token = jwt.encode(payload, 'secret',
                                   algorithm='HS256').decode('utf-8')

                response = Response()

                response.set_cookie(key='jwt', value=token, httponly=True)
                response.data = {
                    'jwt': token,
                }
                return response
            return Response('message: Wrong password', status=status.HTTP_400_BAD_REQUEST)
        return Response('message: User not found', status=status.HTTP_404_NOT_FOUND)


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            return Response('message: Unauthorized', status=status.HTTP_401_UNAUTHORIZED)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response('message: Unauthorized', status=status.HTTP_401_UNAUTHORIZED)

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserGetSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
