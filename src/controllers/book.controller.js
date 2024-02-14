import { status } from '../../config/response.status.js';
import { response } from '../../config/response.js';
import { createBook, readBook, updateBook, deleteBook } from "../services/book.service.js";

export const bookCreate = async (req, res, next) => {
    console.log("bookCreate!");
    console.log("body:", req.body);
    console.log("req.userID: ", req.userID); 

    res.send(response(status.SUCCESS, await createBook(req.body, req.userID)));
};

export const bookRead = async (req, res, next) => {
    console.log("bookRead!");
    console.log("req.userID: ", req.userID); 

    res.send(response(status.SUCCESS, await readBook(req.params, req.userID)));
};

export const bookUpdate = async (req, res, next) => {
    console.log("bookUpdate!");
    console.log("req.userID: ", req.userID); 

    res.send(response(status.SUCCESS, await updateBook(req.params, req.body, req.userID)));
};

export const bookDelete = async (req, res, next) => {
    console.log("bookDelete!");
    console.log("req.userID: ", req.userID); 

    res.send(response(status.SUCCESS, await deleteBook(req.params, req.userID)));
};