from rest_framework import serializers
from backend.app.user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate_password(self, value):
        if len(value) < 6:
            raise serializers.ValidationError(
                'Password must be at least 6 characters long')

        if value.isnumeric():
            raise serializers.ValidationError(
                'Password must contain at least one letter')

        # if value.isalpha():
        #     raise serializers.ValidationError(
        #         'Password must contain at least one number')

        return value

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        return user

    def update(self, instance, validated_data):
        updated_user = super().update(instance, validated_data)
        updated_user.set_password(validated_data['password'])
        updated_user.save()
        return updated_user


class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password',)
