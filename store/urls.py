from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('products', viewset=views.ProductViewSet, basename='products')
router.register('customers', viewset=views.CustomerViewSet,
                basename='customers')
router.register('brands', viewset=views.BrandViewSet, basename='brands')
router.register('carts', viewset=views.CartViewSet, basename='carts')

customers_router = routers.NestedDefaultRouter(
    router, 'customers', lookup='customer'
)
customers_router.register(
    'carts', viewset=views.CartViewSet, basename='customer-carts')

carts_router = routers.NestedDefaultRouter(
    customers_router, 'carts', lookup='cart'
)
carts_router.register(
    'items', viewset=views.CartItemViewSet, basename='cart-items'
)


urlpatterns = router.urls + customers_router.urls + carts_router.urls
