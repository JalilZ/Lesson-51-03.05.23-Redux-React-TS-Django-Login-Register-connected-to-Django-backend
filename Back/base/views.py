from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse

from rest_framework.decorators import api_view # CRUD for Vicky (api_view),

from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView     # Authentication
from rest_framework.decorators import permission_classes     # Authentication
from rest_framework.permissions import IsAuthenticated     # Authentication  

from django.contrib.auth.models import User # import django built in user model

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def about(req):
    # return JsonResponse('hello', safe=False)
    return Response("about - permission")


@api_view(['GET'])
def contact(req):
    return Response("contact - no permission required")


@api_view(['POST'])
def register(request):
    user = User.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password']
            )

    user.is_active = True
    user.is_staff = True
    user.save()
    return Response("new user born")

