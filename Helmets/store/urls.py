from rest_framework.routers import DefaultRouter

from .views import CustomerViewSet, AdminViewSet, BrandViewSet, ProductViewSet

router = DefaultRouter()
router.register('customers', CustomerViewSet, basename='customers')
router.register('admins', AdminViewSet, basename='admins')
router.register('brands', BrandViewSet, basename='brands')
router.register('products', ProductViewSet, basename='products')
urlpatterns = router.urls
