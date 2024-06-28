import {CreateReviewDto} from "./dto/create-review.dto";
import {DocumentType} from "@typegoose/typegoose/lib/types";
import {ReviewModel} from "./review.model";
import {Types} from "mongoose";

export interface ReviewInterface {
    create(dto : CreateReviewDto) : Promise<DocumentType<ReviewModel>>
    delete(id : string) : Promise<DocumentType<ReviewModel> | null>
    findByProductId(productId : string) : Promise<DocumentType<ReviewModel>[]>

}