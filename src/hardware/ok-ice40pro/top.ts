export const topV = `module top (
  input clk12,
  output led_b, led_r
);

reg [24:0] counter;
always @(posedge clk12) begin
  counter <= counter + 1;
end

assign led_b = counter[23];
assign led_r = !counter[23];

endmodule`;
