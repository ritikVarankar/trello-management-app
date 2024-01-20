import { createSlice } from "@reduxjs/toolkit";
import { generateID, handleGetCurrentDate } from "../Reusable/Data";

/**
 * Login Id generateID(4)
 * Task List Id generateID(5)
 * Sub Task List Id generateID(3)
 * Project Id generateID(3)
 */

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { status:"fulfilled", tasks: [
    {
      projectId: generateID(6),
      project:'Test',
      label: 'Test',
      value: 'Test',
      list:{
        Added:[
          {
            listId: generateID(5),
            taskName:'Designing the health pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Added',
            priority:'High',
            date:'2023-01-01'
          },
          {
            listId: generateID(5),
            taskName:'Develop pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Added',
            priority:'High',
            date:'2023-01-01'
          },
          {
            listId: generateID(5),
            taskName:'Designing the health pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Added',
            priority:'High',
            date:'2023-01-05'
          },
          {
            listId: generateID(5),
            taskName:'Develop pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Added',
            priority:'High',
            date:'2023-01-02'
          },
          {
            listId: generateID(5),
            taskName:'Designing the health pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Added',
            priority:'High',
            date:'2023-01-03'
          },
          {
            listId: generateID(5),
            taskName:'Develop pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Added',
            priority:'High',
            date:'2023-01-03'
          },
        ],
        Started:[
          {
            listId: generateID(5),
            taskName:'Designing the Motor pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Started',
            priority:'High',
            date:'2023-01-01'
          }
        ],
        Completed:[
          {
            listId: generateID(5),
            taskName:'Designing the Car pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Completed',
            priority:'High',
            date:'2023-01-01'
          },
          {
            listId: generateID(5),
            taskName:'Validate pages',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
            subtasks:[
              { 
                id: generateID(3),
                subTaskName:'Create login page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Create register page',
                checkedstatus:true
              },
              { 
                id: generateID(3),
                subTaskName:'Add validation on login page',
                checkedstatus:false
              }
            ],
            status:'Completed',
            priority:'High',
            date:'2023-01-01'
          },
        ], 
      }
    },
  ], error:null },
  reducers: {
    existingProject: (state: any, action: any) => {
      state.tasks = action.payload;
    },
    addProject: (state: any, action: any) => {
      let obj={
        projectId: generateID(6),
        project: action.payload,
        label: action.payload,
        value: action.payload,
        list:{
          Added:[],
          Started:[],
          Completed:[], 
        }
      }
      state.tasks.push(obj);
    },
    editProject: (state: any, action: any) => {
      state.tasks = state.tasks.map((dt:any)=>{
        if(dt.project === action.payload.selectEditProject){
          return {
            ...dt, 
            project:action.payload.projectEditName,
            label: action.payload.projectEditName,
            value: action.payload.projectEditName
          }
        }else{
          return dt;
        }
      });
    },
    removeProject: (state: any, action: any) => {
      state.tasks = state.tasks.filter((h: any) => h.projectId !== action.payload);
    },
    addTask: (state: any, action: any) => {
      state.tasks.map((dt:any,index:number)=>{
        if(dt.project === action.payload.selectProject){
          let obj={
            description: action.payload.description,
            status: action.payload.status,
            subtasks: action.payload.subtasks,
            taskName: action.payload.taskName,
            priority:action.payload.priority,
            listId: generateID(5),
            date: handleGetCurrentDate()
          }
          state.tasks[index].list[action.payload.status].push(obj);
        }
      })
    },
    removeTask: (state: any, action: any) => {
      state.tasks=state.tasks.map((dt:any)=>{
        if(dt.project === action.payload.selectProject){
          let arrList = dt.list[action.payload.status].filter((h: any) => h.listId !== action.payload.listId);
          let obj={
            ...dt,
            list:{
              ...dt.list,
              [action.payload.status]:arrList
            }
          }
          return obj;
        }else{
          return dt;
        }
      })
    },
    editTask: (state: any, action: any) => {
      state.tasks=state.tasks.map((dt:any,index:number)=>{
        if(dt.project === action.payload.selectProject){
          let obj:any;
          let arrReqVal:any=[],arrRemVal:any=[];

          if(action.payload.existingStatus === action.payload.status){
            dt.list[action.payload.existingStatus].map((h: any) =>{
                if(h.listId === action.payload.listId){
                  let obj={
                    ...h,
                      description: action.payload.description,
                      status: action.payload.status,
                      subtasks: action.payload.subtasks,
                      taskName: action.payload.taskName,
                      priority:action.payload.priority,
                      date:handleGetCurrentDate()
                    }
                    arrRemVal.push(obj)
                }else{
                  arrReqVal.push(h)
                  }
                });

                obj={
                  ...dt,
                  list:{
                    ...dt.list,
                    [action.payload.existingStatus]: [...arrReqVal,...arrRemVal],
                  }
                }

          }else{
                dt.list[action.payload.existingStatus].map((h: any) =>{
                  if(h.listId !== action.payload.listId){
                    arrReqVal.push(h)
                  }else{
                    let obj={
                        ...h,
                          description: action.payload.description,
                          status: action.payload.status,
                          subtasks: action.payload.subtasks,
                          taskName: action.payload.taskName,
                          priority:action.payload.priority,
                          date:handleGetCurrentDate()
                        }
                        arrRemVal.push(obj)
                      }
                });
                obj={
                  ...dt,
                  list:{
                    ...dt.list,
                    [action.payload.existingStatus]: arrReqVal,
                    [action.payload.status]:  [ ...dt.list[action.payload.status],...arrRemVal]
                  }
                }
          
          }

          return obj;
        }else{
          return dt;
        }
      })
    },
    updateDraggableList:(state: any, action: any) => {
      state.tasks=state.tasks.map((dt:any,index:number)=>{
        if(dt.project === action.payload.selectProject){
          let obj:any;
            obj={
              ...dt,
              list:action.payload.list
            }
          return obj;
        }else{
          return dt;
        }
      })
    }
  },
  extraReducers:(builder)=>{}
});

export const { addProject, removeProject, addTask,
 removeTask,editTask, editProject,updateDraggableList,existingProject } = tasksSlice.actions;
export default tasksSlice.reducer;
