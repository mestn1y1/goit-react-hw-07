import "./App.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contatctsOps";
import { selectIsLoading, selectIsError } from "../../redux/contactsSlice";
import { RotatingLines } from "react-loader-spinner";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching contacts!");
    }
  }, [error]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && (
        <RotatingLines
          visible={true}
          height="76"
          width="76"
          strokeWidth="2"
          strokeColor="grey"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
      )}
      <ToastContainer />
      <ContactList />
    </div>
  );
}
