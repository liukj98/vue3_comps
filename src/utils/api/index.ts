export async function getTableList(keyword: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          list: [{
            id: 1,
            name: 'apple',
            age: 18,
          }, {
            id: 2,
            name: 'banana',
            age: 28,
          }],
          total: 2,
        },
      });
    }, 3000);
  });
}
