const range = (start:number, end: number) => {
  const lst = [];
  for (let i = start; i <= end; i++) {
    lst.push(i);
  }
  return lst;
};

export default range