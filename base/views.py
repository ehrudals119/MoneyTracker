from django.shortcuts import render
from django.http import JsonResponse
from .sample import expenses
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    return Response(expenses)

@api_view(['GET'])
def getExpense(request, pk):
    expense = None
    for exp in expenses:
        if exp['_id'] == pk:
            expense = exp
    return Response(expense)

