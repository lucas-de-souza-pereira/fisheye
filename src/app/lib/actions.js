"use server"

import { updateNumberOfLikes as updateLikesInDb } from "./prisma-db";

export async function updateNumberOfLikes(mediaId, newNumberOfLikes) {

    await updateLikesInDb(mediaId, newNumberOfLikes)
}