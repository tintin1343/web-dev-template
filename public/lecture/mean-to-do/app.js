/**
 * Created by nitinshetty on 1/17/17.
 */
angular.module('TodoApp',[])
    .controller('TodoController',['$scope', function($scope){
        $scope.todo={};
        console.log('$scope ', $scope.todo);
        $scope.todos=[];

        $scope.createTodo = createTodo;
        $scope.deleteToDo = deleteToDo;
        $scope.selectToDo = selectToDo;
        $scope.updateToDo = updateToDo;
        $scope.selectedIndex = -1;

        function createTodo(t){
            var newTodo= {
                title: t.title,
                description: t.description
            }
            $scope.todos.push(newTodo);
            $scope.todo={};
        }

        function deleteToDo(t){
            var indexOfTodo = $scope.todos.indexOf(t);
            console.log(t, indexOfTodo);
            $scope.todos.splice(indexOfTodo,1);
        }

        function selectToDo(t){
            $scope.selectedIndex = $scope.todos.indexOf(t);
            $scope.todo={};
            $scope.todo.title=t.title;
            $scope.todo.description=t.description;
        }

        function updateToDo(t){
            $scope.todos[$scope.selectedIndex] = t;
        }
    }]);

console.log('Angular');