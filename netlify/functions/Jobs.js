export async function handler() {
    const response = await fetch("https://api.mnimedu.com/api/browse/pro-jobs/");
    const data = await response.json();

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
}
