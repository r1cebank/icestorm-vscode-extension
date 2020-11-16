export const resetConditioner = `/*
Parameters:
  STAGES = 4
*/
module reset_conditioner (
 input clk,
 input in,
 output reg out
);

localparam STAGES = 3'h4;


reg [3:0] M_stage_d, M_stage_q = 4'hf;

always @* begin
 M_stage_d = M_stage_q;

 M_stage_d = {M_stage_q[0+2-:3], 1'h0};
 out = M_stage_q[3+0-:1];
end

always @(posedge clk) begin
 if (in == 1'b1) begin
   M_stage_q <= 4'hf;
 end else begin
   M_stage_q <= M_stage_d;
 end
end

endmodule`;

export const blinker = `module blinker (
    input clk,
    input rst,
    output reg blink
  );


  reg [24:0] M_counter_d, M_counter_q = 1'h0;

  always @* begin
    M_counter_d = M_counter_q;

    blink = M_counter_q[24+0-:1];
    M_counter_d = M_counter_q + 1'h1;
  end

  always @(posedge clk) begin
    if (rst == 1'b1) begin
      M_counter_q <= 1'h0;
    end else begin
      M_counter_q <= M_counter_d;
    end
  end

endmodule`;
