from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('products', viewset=views.ProductViewSet, basename='products')
router.register('customers', viewset=views.CustomerViewSet,
                basename='customers')
router.register('brands', viewset=views.BrandViewSet, basename='brands')
router.register('carts', viewset=views.CartViewSet, basename='carts')
router.register('orders', viewset=views.OrderViewSet, basename='orders')

customers_router = routers.NestedDefaultRouter(
    router, 'customers', lookup='customer'
)
customers_router.register(
    'carts', viewset=views.CartViewSet, basename='customer-carts')

customers_router.register(
    'orders', viewset=views.OrderViewSet, basename='customer-orders')


carts_router = routers.NestedDefaultRouter(
    customers_router, 'carts', lookup='cart'
)
carts_router.register(
    'items', viewset=views.CartItemViewSet, basename='cart-items'
)


orders_router = routers.NestedDefaultRouter(
    customers_router, 'orders', lookup='order')
orders_router.register(
    'items', viewset=views.OrderItemViewSet, basename='order-items')


urlpatterns = router.urls + customers_router.urls + \
    carts_router.urls + orders_router.urls
