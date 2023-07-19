import { Card, CardContent, Skeleton } from "@mui/material";

export default function CharacterSkeleton() {
  return (
    <Card>
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Skeleton height={25} />
      </CardContent>
    </Card>
  );
}
