import Header from "./components/Header";
import Entry from "./components/Entry";
import { useQuery, gql } from "@apollo/client";

const GET_RECORDS = gql`
    query GetRecords {
        records(where:{orderby: {field:DATE,order: ASC}}) {
            edges {
              node {
                title
                recordMeta {
                  imageurl
                  location
                  googlemapsurl
                  startdate
                  enddate
                  description
                }
              }
            }
        }
    }
`;

function DisplayRecords(){
    const { loading, error, data } = useQuery(GET_RECORDS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.records.edges.map(( item, key ) => (
        <Entry 
            key={key}
            {...item}
        />
    ));
  
}

const App = () => {
    return (
        <div className="max-w-xl mx-auto">
            <Header />
            <section className="container p-2 md:p-10">
              <DisplayRecords />
            </section>
        </div>
    )
}

export default App;