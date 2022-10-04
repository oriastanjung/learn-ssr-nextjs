import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
function Users(props) {
  const { user } = props;
  return (
    <Layout title={`Users with id : ${user.id}`}>
      <div>
        <p>nama : {user.name} </p>
        <p>email : {user.email} </p>
        <p>phone : {user.phone} </p>
      </div>
    </Layout>
  );
}

export default Users;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  // console.log(res);
  const data = res.data;

  return {
    props: {
      user: data,
    },
  };
}
