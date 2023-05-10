const posts = {
  posts: [
    {
      title: "test1",
      name: "test1",
      tags: ["tag1", "tag2"],
      date: "2017-01-01",
      updated: "2018-01-01",
      categories: ["article", "category2"],
      description: "",
    },
    {
      title: "test",
      name: "test",
      tags: ["tag1", "tag2"],
      date: "2019-01-01",
      updated: "2019-01-01",
      categories: ["article", "category2"],
      description: "",
    },
    {
      title: "test2",
      name: "test2",
      tags: ["tag1", "tag2"],
      date: "2016-01-01",
      updated: "2016-01-01",
      categories: ["article", "category111"],
      description: "",
    },
    {
      title: "路由设计哲学",
      name: "routing-design-philosophy",
      tags: ["tag1", "tag2"],
      date: "2016-02-01",
      updated: "2016-02-02",
      categories: ["article", "category2"],
      description: "",
    },
  ],
};

const archiveArray: [
  {
    year: number;
    next: [
      {
        month: number;
        posts: string[];
      }
    ];
  }
] = [
  {
    year: new Date(posts.posts[0].date).getFullYear(),
    next: [
      {
        month: new Date(posts.posts[0].date).getMonth() + 1,
        posts: [posts.posts[0].name],
      },
    ],
  },
];
posts.posts.forEach((value, index, array) => {
  let yearExists = false;
  let monthExists = false;
  console.log(value.date);
  if (index !== 0) {
    const date = new Date(value.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    archiveArray.forEach((subValue, subIndex, subArray) => {
      if (subValue?.year === year) {
        yearExists = true;
        subValue.next.forEach((subSubValue, subSubIndex, subSubArray) => {
          if (subSubValue?.month === month) {
            monthExists = true;
            // subSubValue.posts.push(value?.name);
          }
          // else
          // subValue.next.push({ month: month, posts: [value?.name] });
        });
      }
      // else {
      //   archiveArray.push({
      //     year: year,
      //     next: [{ month: month, posts: [value?.name] }],
      //   });
      // }
    });
    if (!yearExists) {
      archiveArray.push({
        year: year,
        next: [{ month: month, posts: [value?.name] }],
      });
    }
    if (yearExists && monthExists) {
      archiveArray.forEach((subValue, subIndex, subArray) => {
        if (subValue?.year === year) {
          subValue.next.forEach((subSubValue, subSubIndex, subSubArray) => {
            if (subSubValue?.month === month) {
              subSubValue.posts.push(value?.name);
            }
          });
        }
      });
    }
    if (yearExists && !monthExists) {
      archiveArray.forEach((subValue, subIndex, subArray) => {
        if (subValue?.year === year) {
          subValue.next.push({ month: month, posts: [value?.name] });
        }
      });
    }
  }
});
console.log(archiveArray);
