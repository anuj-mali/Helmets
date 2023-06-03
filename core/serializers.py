from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from djoser.serializers import UserSerializer as BaseUserSerializer

from rest_framework import serializers


class UserCreateSerializer(BaseUserCreateSerializer):
    confirm_password = serializers.CharField(
        style={'input_type': 'password'}, write_only=True
    )

    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'username', 'password', 'confirm_password',
                  'email', 'first_name', 'last_name']

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {'password': "Password fields didn't match."}
            )
        attrs.pop('confirm_password')
        return super().validate(attrs)


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
