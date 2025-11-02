
"use server"
import { redirect } from "next/navigation"
import prismaInstance from "../../../prisma.config"

// Server action that accepts a FormData object from a client form
export async function SaveSnippet(formData: FormData) {
    const id = Number(formData.get("id"))
    const code = String(formData.get("code"))

    if (Number.isNaN(id)) {
        throw new Error("Invalid id")
    }

    await prismaInstance.snippet.update({
        where: { id },
        data: { code },
    })

    redirect(`/snippet/${id}`)
}


export  const DeleteSnippet = async (id: number) => {
    await prismaInstance.snippet.delete({
        where: { id },
    })

    
}