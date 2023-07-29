from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import TaskSerializer
from .models import Task


# class Task(APIView):
#     def get(self, request):
#         pass


class TaskList(APIView):
    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)  # tells the program that there is many return hence put it as a list
        return Response(serializer.data)


class TaskDetails(APIView):
    def get(self, request, pk):
        tasks = Task.objects.get(id=pk)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)


class TaskCreate(APIView):
    def put(self, request):
        serializer = TaskSerializer(data=request.data)

        if serializer.is_valid():  # required to check if serializer is correct before saving
            serializer.save()
            return Response(serializer.data)

        else:
            return Response(serializer.errors)


class TaskUpdate(APIView):
    def patch(self, request, pk):
        task = Task.objects.get(id=pk)
        serializer = TaskSerializer(instance=task, data=request.data, partial=True)  # allow partial update of data within a row

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


class TaskDelete(APIView):
    def delete(self, request, pk):
        task = Task.objects.get(id=pk)
        task.delete()

        return Response('item deleted')
