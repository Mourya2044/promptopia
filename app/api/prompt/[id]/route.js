import { connectToDB } from "@utils/database";
import Prompt from "@models/prompts";

export const GET = async (request, { params }) => {
    try {
        // Await params to access the dynamic id
        const { id } = await params;

        await connectToDB();

        const prompt = await Prompt.findById(id).populate("creator");

        if (!prompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch prompt", { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    try {
        // Await params to access the dynamic id
        const { id } = await params;

        const { prompt, tag } = await request.json();

        await connectToDB();

        const updatedPrompt = await Prompt.findByIdAndUpdate(
            id,
            { prompt, tag },
            { new: true }
        );

        if (!updatedPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        return new Response(JSON.stringify(updatedPrompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 });
    }
};


// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted", { status: 200 });
    } catch (error) {
        return new Response("Failed to delete prompt", { status: 500 });
    }
}
