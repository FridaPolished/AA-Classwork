// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
 let graph = getGraph(prerequisites);
 let total = Object.keys(graph).length;
  let completed = new Set();
  
  let flag = true; 

  while(flag){
    flag = false;

    for(let course in graph){
      let prerequisiteTaken = graph[course].every((pre)=> completed.has(pre));
      if(!completed.has(course) && prerequisiteTaken){
        completed.add(course);
        flag = true;
      }
    }
  }
return completed.size === total;
}


function getGraph(listPr){
  let graph = {};
  
  listPr.forEach(prerequisite => {
    let val = prerequisite[0];
    graph[val] = [String(prerequisite[1])];
    let pre = prerequisite[1];
    if(!(pre in graph)){
      graph[pre] = []; 
    }
  });
  return graph;
}

// console.log(canFinish(2, [[1,0]])) //true
// console.log(canFinish(1, [])) //false
// console.log(canFinish(2, [[1, 0], [0, 1]])) //false