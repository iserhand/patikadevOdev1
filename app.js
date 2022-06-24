/* eslint-disable require-jsdoc */
import axios from 'axios';
export async function getData(id) {
  const {data: user}=await axios('https://jsonplaceholder.typicode.com/users/'+ id);
  const {data: post}=await axios('https://jsonplaceholder.typicode.com/posts?userId='+ id);
  return {user, post};
}
