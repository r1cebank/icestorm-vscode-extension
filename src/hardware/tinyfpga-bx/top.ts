export const topV = `module top (
  input clk,
  input rst_n,
  output reg [7:0] led,
  input usb_rx,
  output reg usb_tx
);

reg rst;

wire [1-1:0] M_reset_cond_out;
reg [1-1:0] M_reset_cond_in;
reset_conditioner reset_cond (
  .clk(clk),
  .in(M_reset_cond_in),
  .out(M_reset_cond_out)
);
wire [1-1:0] M_myBlinker_blink;
blinker myBlinker (
  .clk(clk),
  .rst(rst),
  .blink(M_myBlinker_blink)
);

always @* begin
  M_reset_cond_in = ~rst_n;
  rst = M_reset_cond_out;
  led = {4'h8{M_myBlinker_blink}};
  usb_tx = usb_rx;
end
endmodule`;
