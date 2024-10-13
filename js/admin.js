let users = JSON.parse(localStorage.getItem("users")) || [];
function saveToUser() {
  localStorage.setItem("users", JSON.stringify(users));
}
renderUser();
function removeFromToUser(userDeleteId) {
  const newUser = []; 
  users.forEach((user) => {
    if(user.id !== userDeleteId) {
      newUser.push(user);
    }
    users = newUser;
    saveToUser();
  });
}
function renderUser() {
  const usersInfo = document.querySelector('.users-info');
  let todoUsers = "";
  let numberRow = 0;
  users.forEach((user) => {
    numberRow++;
    todoUsers += `
      <tr>
        <th scope="row">${numberRow}</th>
        <td>${user.id}</td>
        <td>${user.phoneUser}</td>
        <td>${user.passWordUser}</td>
        <td>
          <button type="button" class="fix-btn btn btn-warning mx-2" data-user=${user.id}>Sửa</button>
          <button  type="button" class="delete-btn btn btn-danger mx-2"  data-user=${user.id}>Xóa</button>
        </td>
      </tr>
    `
  });
  usersInfo.innerHTML = todoUsers;
  console.log(users);
  console.log(todoUsers);
  document.querySelectorAll('.delete-btn').forEach((fixBtn) => {
    fixBtn.addEventListener('click', () => {
      const userDeleteId = parseInt(fixBtn.dataset.user);
      removeFromToUser(userDeleteId);
      renderUser();
    });
  });
  // document.querySelectorAll('.fix-btn').forEach((fixBtn) => {
  //   fixBtn.addEventListener('click', () => {
  //     const userFix = fixBtn.dataset.user;
  //   })
  // });
}