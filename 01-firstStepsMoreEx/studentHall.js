function studentHall(input) {
    let lenght = Number(input[0]);
    let height = Number(input[1] - 1);
    let rowsPossible = (Math.floor(height / 0.7));
    let tablesPerRow = (Math.floor(lenght / 1.2));
    let workspacesCount = rowsPossible * tablesPerRow - 3;
    
    console.log(workspacesCount);
    }
  
  studentHall(["8.4","5.2"]);