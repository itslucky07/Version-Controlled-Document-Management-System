from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

@csrf_exempt
@api_view(['GET'])
def fetch_token(request):
    if request.method != "GET":
        return Response(
            {"error": "Method not allowed"},
            status=405
        )
    if not request.user.is_authenticated:
        return Response(
            {"error": "Not authenticated"},
            status=401
        )
    print(request.user)
    token, _ = Token.objects.get_or_create(user=request.user)

    return Response(
        {"token": token.key},
        status=200
    )