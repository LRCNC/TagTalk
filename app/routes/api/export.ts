import { json } from "@remix-run/node";

export async function loader() {
  // Mock CSV content
  const csv = `tag,message,views,variantA,variantB
leadtime,Ships in 5-7 days,12,7,5
rush,Ships in 1-2 days,8,4,4`;
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=tagtalk-analytics.csv",
    },
  });
}
