import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () { return Number(this) }
export default nextConfig;
