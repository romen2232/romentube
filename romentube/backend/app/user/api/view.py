from rest_framework.views import APIView
from backend.app.user.api.serializers import UserSerializer, UserGetSerializer
from backend.app.user.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


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
