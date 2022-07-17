graph = {
  'S' : [{'A': 2},{'B': 3},{'D': 5}],
  'A' : [{'C': 4}],
  'B':[{'D':4}],
  'C': [{'D':1},{'G': 1}],
  'D': [{'G':5}]
}
function sum(x){
  let _sum = 0;
  for (let i = 0 ; i < x.length; i++) {
    _sum += parseInt(Object.values(x[i])[0]);
  }
  return _sum;
}


function bubbleSort(array, sum){
  let isOrdered;
  if (array.length <=1)
    return sum(array[0])
  for (let i = 0; i < array.length; i++) {
    isOrdered = true;
    for (let x = 0; x < array.length - 1 - i; x++) {
      if (sum(array[x]) > sum(array[x + 1])) {
        [array[x], array[x + 1]] = [array[x + 1], array[x]];
        isOrdered = false;
      }
    }
    if (isOrdered) break;
  }
  return array;
}


function check_arr(element,arr){
  let count = 0;
  for (let i = 0; i < arr.length; i ++){
      if (arr[i] === element)  {
          count ++;
          break
      }
  }
  return (count >0) ? true : false
}

function find(graph, end,sum){
  visited =[];
  queue = [];
  queue = [[{'S': 0}]]
  while (queue)
  {
    // bubbleSort(queue,sum)
    bubbleSort(queue,sum)
    path = queue.shift();
    a = path[path.length - 1];
    node = Object.keys(a)[0];
    if (check_arr(node,visited) == true) {
      continue;
    }
    visited.push(node);
    if (node == end)
    {
      return path;
    }
    else{
      for (let i = 0 ; i < graph[node].length;i++){
        new_path = [...path];
        new_path.push(graph[node][i]);
        queue.push(new_path);
      }
    }
  }  
}

solution = find(graph,'G',sum);
console.log(solution);
cost = sum(solution);
console.log("Chi phí :" + cost);


