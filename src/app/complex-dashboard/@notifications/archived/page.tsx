import React from "react";
import { Card } from "@/components/card";
import Link from "next/link";

function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}

export default ArchivedNotifications;
