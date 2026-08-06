import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const handler = async (_req: Request): Promise<Response> => {
    try {
        // Lekérdezzük a Deno szerver külső IP címét
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        // JSON kimenet összeállítása
        const jsonOutput = JSON.stringify({
            ip: data.ip,
            provider: "Deno Deploy",
            status: "success"
        }, null, 2);

        return new Response(jsonOutput, {
            headers: { 
                "content-type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*" 
            },
        });
    } catch (_error) {
        return new Response(JSON.stringify({ error: "Nem sikerült lekérni az IP címet" }), {
            status: 500,
            headers: { "content-type": "application/json; charset=utf-8" },
        });
    }
};

serve(handler);
