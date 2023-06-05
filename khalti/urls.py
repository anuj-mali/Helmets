from .views import VerifyKhaltiPayment
from django.urls import path

urlpatterns = [
    path('verify-payment/', VerifyKhaltiPayment.as_view()),
]
