import {
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import DividerHeading from "~/buildingBlockComponents/dividerHeading";

export default function Test() {
  return (
    <CenterFull>
      <VStackFull>
        <DividerHeading heading="Image Wall" />
        <DividerHeading heading="Image Wall" rightSide={true} />
        <DividerHeading heading="Image Wall" leftSide={true} />
        <DividerHeading
          heading="Image Wall"
          noDividers
          justify="justify-center"
        />
      </VStackFull>
    </CenterFull>
  );
}
