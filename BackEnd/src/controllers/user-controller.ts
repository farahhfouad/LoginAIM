import { Request, Response } from 'express';
import { UserRepo } from "../repositories/user-repo";
import { UserEntity } from "../entities/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export let getUsers = (req: Request, res: Response) => {
    let Rep: UserRepo = new UserRepo();
    console.log("Get Request recieved");
    Rep.getAllUsers().then((result: any) => {
        console.log(`Results:  ${result}`);
        res.send(result);

    })

}

export let RegUser = (req: Request, res: Response) => {
    let rep: UserRepo = new UserRepo();
    let user: UserEntity = new UserEntity();

    rep.getUser(req.body.userName).then((result: any) => {
        if (result.length == 0) {
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                if (error) {
                    return res.status(500).json(error);
                }
                else {
                    user.password = hash;
                    user.userName = req.body.userName;
                    rep.AddUser(user).then((result: any) => {
                        console.log(`Result is:  ${result}`);
                        res.send(result);
                    })

                }
            });


        }
        else {
            console.log("here>  " + result.length);
            return res.send({ message: "Email Already Exists" });

        }

    });


}

export let getUser = (req: Request, res: Response) => {
    let Rep: UserRepo = new UserRepo();
    console.log("Get Request recieved" + JSON.stringify(req.body));
    Rep.getUser(req.body.username).then((result: any) => {
        console.log(result);
        if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password, (error, response) => {
                if (error) {
                    console.log("ERROR IN BCRYPT");
                    return res.status(401).send('ERROR IN BCRYPT');;
                }
                if (response) {
                    const token = jwt.sign({ userName: result[0].userName },
                        "" + process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        });

                    console.log("GOOD!");
                    return res.send({ message: "SIGN IN SUCCESSFUL", token: token });
                }
                console.log("NO MATCH!");
                return res.status(400).send('Not a Match');
            })
        }
        else {
            return res.status(500).send('no User');
        }



    })

}