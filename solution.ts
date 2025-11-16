type FormatValue = string | number | boolean;

const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type GetLength<T> = string | Array<T>;

const getLength = <T>(value: GetLength<T>): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type RatingItem = {
  title: string;
  rating: number;
};

const filterByRating = (items: RatingItem[]): RatingItem[] => {
  return items.filter((item) => item.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((item) => item.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

type UniqueArray = (string | number)[];

const getUniqueValues = (arr1: UniqueArray, arr2: UniqueArray): UniqueArray => {
  const firstArrLookUp: Record<string, boolean> = {};
  const uniqueArrLookUp: Record<string, boolean> = {};
  const filteredArr: UniqueArray = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    firstArrLookUp[element] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (firstArrLookUp[element] && !uniqueArrLookUp[element]) {
      uniqueArrLookUp[element] = true;
      filteredArr.push(element);
    }
  }

  return filteredArr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  const total = products.reduce((acc, cur) => {
    const originalPrice = cur.price * cur.quantity;
    const discount = (originalPrice / 100) * (cur.discount || 0);
    const discountedPrice = originalPrice - discount;
    acc += originalPrice;
    return acc;
  }, 0);

  return total;
};
