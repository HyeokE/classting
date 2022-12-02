export const reloadBlock = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = ''; //Chrome에서 동작하도록; deprecated
};
