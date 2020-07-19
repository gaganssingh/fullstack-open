import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then((response) => response.data);

const create = (newObject) =>
   axios.post(baseUrl, newObject).then((response) => response.data);

const deletePerson = (id) =>
   axios.delete(`${baseUrl}/${id}`).then((response) => {
      return { msg: "Person deleted" };
   });

export default { getAll, create, deletePerson };
