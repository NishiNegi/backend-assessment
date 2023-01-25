import {DocumentDefinition, FilterQuery} from "mongoose";
import Fav, {FavDocument} from './fav.model';

// Create a fav
export function createFav(fav:DocumentDefinition<Omit<FavDocument, 'createdAt' | 'updatedAt'>>){
    return Fav.create(fav);
}