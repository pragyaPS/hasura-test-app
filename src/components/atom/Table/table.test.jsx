import { render, cleanup } from "@testing-library/react";
import { PARAM_NO_RECORD_FOUND } from "../../../utils/constants";
import Table from "./index";

describe("test rows", () => {
  test("should render no data found when data is blank array", () => {
    let tableWrapper = render(<Table rows={[]} />);
    expect(tableWrapper.findByText(PARAM_NO_RECORD_FOUND)).toBeInTheDocument;
  });
  test("should render data if passed", () => {
    let mockRows = [
      {
        AlbumId: "303",
        Title: "Australia",
      },
    ];
    let tableWrapper = render(<Table rows={mockRows} />);
    expect(tableWrapper.findByText("Australia")).toBeInTheDocument;
  });
});
