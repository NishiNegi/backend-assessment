import { Request, Response } from "express";
import { createUser } from "./user.services";

export async function handleCreateUser(req: Request, res: Response) {
  const data = req.body;

  function passwordStrengthTest (candidatePassword:string):boolean{
    const upperCaseLetter = /[A-Z]/;
    const number = /[0-9]/;
    return upperCaseLetter.test(candidatePassword) && number.test(candidatePassword);
  }
  try {
    // assert password is in the body of the request
    if(!data.password)
    {
      return res.status(400).json({message: 'password required'});
    }
    // assert password is strong enough
    const passwordStrength = passwordStrengthTest(data.password);
    if(!passwordStrength)
    {
      return res.status(400).json({message: 'Password is not strong enough. Remember to include at least a capital letter and a number.'});
    }
    // Create user
    const user = await createUser(data);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}
