import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const reactQueryClient = cache(() => new QueryClient());
export default reactQueryClient;