
(function (app) {

    app.AppComponent =

      ng.core.Component({
          selector: 'TaskContainer',
          template: '<h1>Task Manager</h1>' +
              '<div><input type="text" required id="txtTask" [(ngModel)]="taskname" placeholder=" Enter task name"/>' +
              '<input type="text" required id="txtTaskDetail" [(ngModel)]="taskdetail" placeholder="Enter task detail"/>' +
              '<button (click)="AddTask()">Add</button></div>' +
              '{{clickMessage}}' +
              '<table><tr *ngFor="let task of tasksList" >' +
              '<td>{{task.name}}</td><td><button (click)="onSelect(task)">Show Detail</button></td></tr></table>' +
              '<div *ngIf="selectedTask">'+
              '<h2>Task details:</h2>' +
              '<div>{{selectedTask.detail}}</div>' +
               '</div>'
          })
      .Class({
          constructor: function () {
              this.clickMessage = 'After button click add tasks here';
              this.tasksList = [];
          },
          AddTask(event) {
              this.clickMessage = 'Add task click Clicked';
              this.tasksList.push({ name: this.taskname, detail: this.taskdetail });
              this.taskname = "";
              this.taskdetail = "";
          },
          onSelect(task) { this.selectedTask = task; }

      })


})(window.app || (window.app = {}));