import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/app.store";

const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
