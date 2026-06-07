function Logo({ size = 32 }: { size?: number }) {
  const ball1 = size / 2;
  const ball2 = ball1 / 2 + 2;
  const radius = size / 4;
  const c = 0.125 * size;
  const ball1Pos = c + 1;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
      }}
      className="bg-(--accent) flex items-center justify-center relative overflow-hidden shrink-0"
    >
      <div
        style={{
          width: ball1,
          height: ball1,
          top: ball1Pos,
          left: ball1Pos,
        }}
        className="bg-white rounded-full absolute"
      ></div>

      <div
        style={{
          width: ball2,
          height: ball2,
          right: c,
          bottom: c,
        }}
        className="size-3 bg-white/40 rounded-full absolute"
      ></div>
    </div>
  );
}

export default Logo;
