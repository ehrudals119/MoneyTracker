from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Expense
from .serializers import ExpenseSerializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/expense/',
        '/api/expense/create',
        '/api/expense/delete/<id>/',
        '/api/expense/<update>/<id>/',

        '/api/deposit/',
        '/api/deposit/create',
        '/api/deposit/delete/<id>/',
        '/api/deposit/<update>/<id>/',
    ]
    
    return Response(routes)

@api_view(['GET'])
def getExpenses(request):
    expenses = Expense.objects.all()
    serializer = ExpenseSerializer(expenses, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getExpense(request, pk):
    expense = Expense.objects.get(_id=pk)
    serializer = ExpenseSerializer(expense, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createExpense(request):

    expense = Expense.objects.create(
        category='',
        amount=0
    )

    serializer = ExpenseSerializer(expense, many=False)
    return Response(serializer.data)
