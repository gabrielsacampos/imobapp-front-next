import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { Badge } from "@tremor/react";


type BadgeProps = {
	errorMessage: string;
}


export function BadgeError({ errorMessage }: BadgeProps) {
  return <Badge icon={ExclamationCircleIcon} color="red">{errorMessage}</Badge>;
}
