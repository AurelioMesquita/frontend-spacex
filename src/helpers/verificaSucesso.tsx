export const checkSucess = data => {
  let sucess = 0;
  data.map(dataOne => {
    dataOne.launch_success === true && (sucess = sucess + 1);
  });
  return sucess;
};
export const checkFailue = data => {
  let failue = 0;
  data.map(dataOne => {
    dataOne.launch_success === false && (failue = failue + 1);
  });
  return failue;
};
