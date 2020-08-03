export default {
  functions: [
    {
      "Name": "ADS.CloseSession",
      "Synopsis": "I32:Error=ADS.CloseSession(ref:Session)"
    },
    {
      "Name": "ADS.OpenSession",
      "Synopsis": "ref:Session,I32:Error=ADS.OpenSession(str:SourceNetID,str:TargetIP,str:TargetNetID,U16:DevicePort)"
    },
    {
      "Name": "ADS.ReadSymbol",
      "Synopsis": "any:Value,I32:Error=ADS.ReadSymbol(ref:Session,str:SymbolName)"
    },
    {
      "Name": "ADS.WriteSymbol",
      "Synopsis": "I32:Error=ADS.WriteSymbol(ref:Session,str:SymbolName,any:Value)"
    },
    {
      "Name": "ClearError",
      "Synopsis": "ClearError()"
    },
    {
      "Name": "COM.Close",
      "Synopsis": "I32:Error=COM.Close(str:COMport)"
    },
    {
      "Name": "COM.FlushBuffer",
      "Synopsis": "I32:Error=COM.FlushBuffer(str:COMport,[U16:Mask])"
    },
    {
      "Name": "COM.Init",
      "Synopsis": "str:COMport,I32:Error=COM.Init(str:COMport,bool:EnableTermChar,U8:TermChar,U32:Timeout,U32:Baudrate,U16:Databits,U16:Parity,U16:Stopbits,U16:FlowControl)"
    },
    {
      "Name": "COM.Open",
      "Synopsis": "I32:Error=COM.Open(str:COMport)"
    },
    {
      "Name": "COM.Read",
      "Synopsis": "str:Buffer,U32:ReturnCount,I32:Error=COM.Read(str:COMport,U32:ByteCount)"
    },
    {
      "Name": "COM.ReceivedBytes",
      "Synopsis": "U32:BytesAtPort,I32:Error=COM.ReceivedBytes(str:COMport)"
    },
    {
      "Name": "COM.SetAllowTransmit",
      "Synopsis": "I32:Error=COM.SetAllowTransmit(str:COMport,bool:AllowTransmit)"
    },
    {
      "Name": "COM.SetBaudRate",
      "Synopsis": "I32:Error=COM.SetBaudRate(str:COMport,U32:BaudRate)"
    },
    {
      "Name": "COM.SetBreakLength",
      "Synopsis": "I32:Error=COM.SetBreakLength(str:COMport,I16:BreakLength)"
    },
    {
      "Name": "COM.SetBreakState",
      "Synopsis": "I32:Error=COM.SetBreakState(str:COMport,I16:BreakState)"
    },
    {
      "Name": "COM.SetDataBits",
      "Synopsis": "I32:Error=COM.SetDataBits(str:COMport,U16:DataBits)"
    },
    {
      "Name": "COM.SetDCDState",
      "Synopsis": "I32:Error=COM.SetDCDState(str:COMport,I16:DCDState)"
    },
    {
      "Name": "COM.SetDiscardNULCharacter",
      "Synopsis": "I32:Error=COM.SetDiscardNULCharacter(str:COMport,bool:Discard)"
    },
    {
      "Name": "COM.SetDTRState",
      "Synopsis": "I32:Error=COM.SetDTRState(str:COMport,I16:DTRState)"
    },
    {
      "Name": "COM.SetEndModeForReads",
      "Synopsis": "I32:Error=COM.SetEndModeForReads(str:COMport,U16:EndModeForReads)"
    },
    {
      "Name": "COM.SetEndModeForWrites",
      "Synopsis": "I32:Error=COM.SetEndModeForWrites(str:COMport,U16:SetEndModeForWrites)"
    },
    {
      "Name": "COM.SetErrorReplacementCharacter",
      "Synopsis": "I32:Error=COM.SetErrorReplacementCharacter(str:COMport,U8:ReplaceChar)"
    },
    {
      "Name": "COM.SetFlowControl",
      "Synopsis": "I32:Error=COM.SetFlowControl(str:COMport,U16:FlowControl)"
    },
    {
      "Name": "COM.SetFlowControlXOFFCharacter",
      "Synopsis": "I32:Error=COM.SetFlowControlXOFFCharacter(str:COMport,U8:XOFFChar)"
    },
    {
      "Name": "COM.SetFlowControlXONCharacter",
      "Synopsis": "I32:Error=COM.SetFlowControlXONCharacter(str:COMport,U8:XONChar)"
    },
    {
      "Name": "COM.SetParity",
      "Synopsis": "I32:Error=COM.SetParity(str:COMport,U16:Parity)"
    },
    {
      "Name": "COM.SetRIState",
      "Synopsis": "I32:Error=COM.SetRIState(str:COMport,I16:RIState)"
    },
    {
      "Name": "COM.SetRTSState",
      "Synopsis": "I32:Error=COM.SetRTSState(str:COMport,I16:RTSState)"
    },
    {
      "Name": "COM.SetStopBits",
      "Synopsis": "I32:Error=COM.SetStopBits(str:COMport,U16:StopBits)"
    },
    {
      "Name": "COM.SetWireMode",
      "Synopsis": "I32:Error=COM.SetWireMode(str:COMport,I16:WireMode)"
    },
    {
      "Name": "COM.Write",
      "Synopsis": "U32:WriteCount,I32:Error=COM.Write(str:COMport,str:Buffer)"
    },
    {
      "Name": "CVT.getDigital",
      "Synopsis": "bool:Value,I32:Error=CVT.getDigital(str:Channel)"
    },
    {
      "Name": "CVT.getNumeric",
      "Synopsis": "num:Value,I32:Error=CVT.getNumeric(str:Channel)"
    },
    {
      "Name": "CVT.getString",
      "Synopsis": "str:Value,I32:Error=CVT.getString(str:Channel)"
    },
    {
      "Name": "CVT.setDigital",
      "Synopsis": "I32:Error=CVT.setDigital(str:Channel,bool:Value)"
    },
    {
      "Name": "CVT.setNSDigital",
      "Synopsis": "I32:Error=CVT.setNSDigital(str:Channel,bool:Value)"
    },
    {
      "Name": "CVT.setNSNumeric",
      "Synopsis": "I32:Error=CVT.setNSNumeric(str:Channel,num:Value)"
    },
    {
      "Name": "CVT.setNSString",
      "Synopsis": "I32:Error=CVT.setNSString(str:Channel,str:Value)"
    },
    {
      "Name": "CVT.setNumeric",
      "Synopsis": "I32:Error=CVT.setNumeric(str:Channel,num:Value)"
    },
    {
      "Name": "CVT.setString",
      "Synopsis": "I32:Error=CVT.setString(str:Channel,str:Value)"
    },
    {
      "Name": "DropCaches",
      "Synopsis": "I32:ReturnCode,I32:Error=DropCaches()"
    },
    {
      "Name": "FormatTime",
      "Synopsis": "str:Time=FormatTime(num:Timestamp)"
    },
    {
      "Name": "GetError",
      "Synopsis": "str:LastError=GetError()"
    },
    {
      "Name": "GetOS",
      "Synopsis": "str:OS=GetOS()"
    },
    {
      "Name": "GetTime",
      "Synopsis": "num:Time=GetTime()"
    },
    {
      "Name": "GetTimeString",
      "Synopsis": "str:Time=GetTimeString()"
    },
    {
      "Name": "GetVersion",
      "Synopsis": "str:Version=GetVersion()"
    },
    {
      "Name": "Image.ConfigureVideoOut",
      "Synopsis": "Image.ConfigureVideoOut(bool:GraphicsMode,U32:ScreenArea,U32:ColorDepth,U32:RefreshFrequency)"
    },
    {
      "Name": "Image.Create",
      "Synopsis": "Image.Create(str:Name,[str:Type])"
    },
    {
      "Name": "Image.Destroy",
      "Synopsis": "Image.Destroy(obj:Image)"
    },
    {
      "Name": "Image.Release",
      "Synopsis": "Image.Release(obj:Image)"
    },
    {
      "Name": "Image.VideoOut",
      "Synopsis": "Image.VideoOut(obj:Image)"
    },
    {
      "Name": "Laser.GetDiameterCalibration",
      "Synopsis": "tab:CalibrationData,I32:Error=Laser.GetDiameterCalibration(str:Name)"
    },
    {
      "Name": "Laser.GetGate",
      "Synopsis": "bool:Gate=Laser.GetGate(str:Name)"
    },
    {
      "Name": "Laser.GetMaxDiameter",
      "Synopsis": "num:MaxDiameter,I32:Error=Laser.GetMaxDiameter(str:Name)"
    },
    {
      "Name": "Laser.GetMaxPower",
      "Synopsis": "num:MaxPower,I32:Error=Laser.GetMaxPower(str:Name)"
    },
    {
      "Name": "Laser.GetMinDiameter",
      "Synopsis": "num:MinDiameter,I32:Error=Laser.GetMinDiameter(str:Name)"
    },
    {
      "Name": "Laser.GetMinPower",
      "Synopsis": "num:MinPower,I32:Error=Laser.GetMinPower(str:Name)"
    },
    {
      "Name": "Laser.GetOffDelay",
      "Synopsis": "num:OffDelay,I32:Error=Laser.GetOffDelay(str:Name)"
    },
    {
      "Name": "Laser.GetOnDelay",
      "Synopsis": "num:OnDelay,I32:Error=Laser.GetOnDelay(str:Name)"
    },
    {
      "Name": "Laser.GetPower",
      "Synopsis": "num:Power,I32:Error=Laser.GetPower(str:Name)"
    },
    {
      "Name": "Laser.GetPowerCalibration",
      "Synopsis": "tab:CalibrationData,I32:Error=Laser.GetPowerCalibration(str:Name)"
    },
    {
      "Name": "Laser.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=Laser.ListChannels(str:Name)"
    },
    {
      "Name": "Laser.SetDiameterCalibration",
      "Synopsis": "I32:Error=Laser.SetDiameterCalibration(str:Name,tab:CalibrationData)"
    },
    {
      "Name": "Laser.SetGate",
      "Synopsis": "I32:Error=Laser.SetGate(str:Name,bool:Gate)"
    },
    {
      "Name": "Laser.SetMaxDiameter",
      "Synopsis": "I32:Error=Laser.SetMaxDiameter(str:Name,num:MaxDiameter)"
    },
    {
      "Name": "Laser.SetMaxPower",
      "Synopsis": "I32:Error=Laser.SetMaxPower(str:Name,num:MaxPower)"
    },
    {
      "Name": "Laser.SetMinDiameter",
      "Synopsis": "I32:Error=Laser.SetMinDiameter(str:Name,num:MinDiameter)"
    },
    {
      "Name": "Laser.SetMinPower",
      "Synopsis": "I32:Error=Laser.SetMinPower(str:Name,num:MinPower)"
    },
    {
      "Name": "Laser.SetOffDelay",
      "Synopsis": "I32:Error=Laser.SetOffDelay(str:Name,num:OffDelay)"
    },
    {
      "Name": "Laser.SetOnDelay",
      "Synopsis": "I32:Error=Laser.SetOnDelay(str:Name,num:OnDelay)"
    },
    {
      "Name": "Laser.SetPower",
      "Synopsis": "I32:Error=Laser.SetPower(str:Name,num:Power,[bool:LON])"
    },
    {
      "Name": "Laser.SetPowerCalibration",
      "Synopsis": "I32:Error=Laser.SetPowerCalibration(str:Name,tab:CalibrationData)"
    },
    {
      "Name": "Laser.StartTimedShot",
      "Synopsis": "I32:Error=Laser.StartTimedShot(str:Name,num:Time)"
    },
    {
      "Name": "Laser.StopTimedShot",
      "Synopsis": "I32:Error=Laser.StopTimedShot(str:Name)"
    },
    {
      "Name": "MCP.ListObjects",
      "Synopsis": "tab:ObjectNames,I32:Error=MCP.ListObjects([str:ClassName])"
    },
    {
      "Name": "MessageBox",
      "Synopsis": "MessageBox(str:Text)"
    },
    {
      "Name": "Modbus.Close",
      "Synopsis": "I32:Error=Modbus.Close(ref:Session)"
    },
    {
      "Name": "Modbus.OpenRS485",
      "Synopsis": "ref:Session,I32:Error=Modbus.OpenRS485(str:COMport,U16:SerialType,U8:UnitID,U32:BaudRate,U16:Parity,U16:FlowControl)"
    },
    {
      "Name": "Modbus.OpenTCP",
      "Synopsis": "ref:Session,I32:Error=Modbus.OpenTCP(str:IPAddress,U16:Port)"
    },
    {
      "Name": "Modbus.ReadCoils",
      "Synopsis": "tab:Coils,I32:Error=Modbus.ReadCoils(ref:Session,U16:StartAddress,U16:NumberOfCoils)"
    },
    {
      "Name": "Modbus.ReadDI",
      "Synopsis": "tab:DigitalInputs,I32:Error=Modbus.ReadDI(ref:Session,U16:StartAddress,U16:NumberOfInputs)"
    },
    {
      "Name": "Modbus.ReadExceptionStatus",
      "Synopsis": "U8:ExceptionCode,I32:Error=Modbus.ReadExceptionStatus(ref:Session)"
    },
    {
      "Name": "Modbus.ReadHR",
      "Synopsis": "tab:HoldingRegisters,I32:Error=Modbus.ReadHR(ref:Session,U16:StartAddress,U16:NumberOfHoldingRegisters)"
    },
    {
      "Name": "Modbus.ReadIR",
      "Synopsis": "tab:InputRegisters,I32:Error=Modbus.ReadIR(ref:Session,U16:StartAddress,U16:NumberOfInputRegisters)"
    },
    {
      "Name": "Modbus.RWMultipleHR",
      "Synopsis": "tab:Registers,I32:Error=Modbus.RWMultipleHR(ref:Session,U16:WriteStartAddress,tab:WriteHRs,U16:ReadStartAddress,U16:NumberOfRegisters)"
    },
    {
      "Name": "Modbus.SetTimeouts",
      "Synopsis": "I32:Error=Modbus.SetTimeouts(ref:Session,I32:ReadTimeout,I32:WriteTimeout)"
    },
    {
      "Name": "Modbus.SetUnitID",
      "Synopsis": "I32:Error=Modbus.SetUnitID(ref:Session,U8:UnitID)"
    },
    {
      "Name": "Modbus.WriteMultipleCoils",
      "Synopsis": "I32:Error=Modbus.WriteMultipleCoils(ref:Session,U16:StartAddress,tab:Coils)"
    },
    {
      "Name": "Modbus.WriteMultipleHR",
      "Synopsis": "I32:Error=Modbus.WriteMultipleHR(ref:Session,U16:StartAddress,tab:HoldingRegisters)"
    },
    {
      "Name": "Modbus.WriteSingleCoil",
      "Synopsis": "I32:Error=Modbus.WriteSingleCoil(ref:Session,U16:Address,bool:Coil)"
    },
    {
      "Name": "Modbus.WriteSingleHR",
      "Synopsis": "I32:Error=Modbus.WriteSingleHR(ref:Session,U16:Address,U16:HoldingRegister)"
    },
    {
      "Name": "Module.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=Module.ListChannels(str:Name)"
    },
    {
      "Name": "Motion.Abort",
      "Synopsis": "I32:Error=Motion.Abort(str:Name)"
    },
    {
      "Name": "Motion.Enable",
      "Synopsis": "I32:Error=Motion.Enable(str:Name,bool:Enable)"
    },
    {
      "Name": "Motion.GetAcceleration",
      "Synopsis": "num:Acceleration,I32:Error=Motion.GetAcceleration(str:Name)"
    },
    {
      "Name": "Motion.GetDeceleration",
      "Synopsis": "num:Deceleration,I32:Error=Motion.GetDeceleration(str:Name)"
    },
    {
      "Name": "Motion.GetHomingSpeed",
      "Synopsis": "num:HomingSpeed,I32:Error=Motion.GetHomingSpeed(str:Name)"
    },
    {
      "Name": "Motion.GetUnit",
      "Synopsis": "str:Unit,I32:Error=Motion.GetUnit(str:Name)"
    },
    {
      "Name": "Motion.GotoHome",
      "Synopsis": "I32:Error=Motion.GotoHome(str:Name)"
    },
    {
      "Name": "Motion.GotoPosition",
      "Synopsis": "I32:Error=Motion.GotoPosition(str:Name,num:Position,num:Speed)"
    },
    {
      "Name": "Motion.GotoSpeed",
      "Synopsis": "I32:Error=Motion.GotoSpeed(str:Name,num:Speed)"
    },
    {
      "Name": "Motion.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=Motion.ListChannels(str:Name)"
    },
    {
      "Name": "Motion.ResetPosition",
      "Synopsis": "I32:Error=Motion.ResetPosition(str:Name)"
    },
    {
      "Name": "Motion.SetAcceleration",
      "Synopsis": "I32:Error=Motion.SetAcceleration(str:Name,num:Acceleration)"
    },
    {
      "Name": "Motion.SetDeceleration",
      "Synopsis": "I32:Error=Motion.SetDeceleration(str:Name,num:Deceleration)"
    },
    {
      "Name": "Motion.SetHomingSpeed",
      "Synopsis": "I32:Error=Motion.SetHomingSpeed(str:Name,num:HomingSpeed)"
    },
    {
      "Name": "Motion.SetUnit",
      "Synopsis": "I32:Error=Motion.SetUnit(str:Name,str:Unit)"
    },
    {
      "Name": "Motion.Stop",
      "Synopsis": "I32:Error=Motion.Stop(str:Name)"
    },
    {
      "Name": "PrintToConsole",
      "Synopsis": "PrintToConsole(str:Text,...)"
    },
    {
      "Name": "ProfibusMaster.EnableWrite",
      "Synopsis": "I32:Error=ProfibusMaster.EnableWrite(str:Name,bool:Enable)"
    },
    {
      "Name": "Queue.Dequeue",
      "Synopsis": "str:Element,I32:Error=Queue.Dequeue(ref:Queue,I32:Timeout)"
    },
    {
      "Name": "Queue.Enqueue",
      "Synopsis": "I32:Error=Queue.Enqueue(ref:Queue,str:Element)"
    },
    {
      "Name": "Queue.Obtain",
      "Synopsis": "ref:Queue,I32:Error=Queue.Obtain(str:Name,[I32:Size])"
    },
    {
      "Name": "ScanField.Abort",
      "Synopsis": "I32:Error=ScanField.Abort(str:Name)"
    },
    {
      "Name": "ScanField.ClearDataBlocks",
      "Synopsis": "I32:Error=ScanField.ClearDataBlocks(str:Name)"
    },
    {
      "Name": "ScanField.CreateDataBlock",
      "Synopsis": "I32:Error=ScanField.CreateDataBlock(str:Name,num:Power,num:Diameter,tab:Vectors,num:Speed,I32:LaserIndex)"
    },
    {
      "Name": "ScanField.GeneratePattern",
      "Synopsis": "I32:Error=ScanField.GeneratePattern(str:Name,num:Power,num:Speed,str:PatternType)"
    },
    {
      "Name": "ScanField.GetAlign",
      "Synopsis": "bool:Align,I32:Error=ScanField.GetAlign(str:Name)"
    },
    {
      "Name": "ScanField.GetAngleThreshold",
      "Synopsis": "num:LowerAngleThreshold,I32:Error=ScanField.GetAngleThreshold(str:Name)"
    },
    {
      "Name": "ScanField.GetDataBlocks",
      "Synopsis": "[obj:DataBlockObject]=ScanField.GetDataBlocks(str:Name)"
    },
    {
      "Name": "ScanField.GetJumpDelay",
      "Synopsis": "num:JumpDelay,I32:Error=ScanField.GetJumpDelay(str:Name)"
    },
    {
      "Name": "ScanField.GetJumpSpeed",
      "Synopsis": "num:JumpSpeed,I32:Error=ScanField.GetJumpSpeed(str:Name)"
    },
    {
      "Name": "ScanField.GetLaser",
      "Synopsis": "obj:LaserObject,I32:Error=ScanField.GetLaser(str:Name,I32:Index)"
    },
    {
      "Name": "ScanField.GetLasers",
      "Synopsis": "[obj:LaserObject]=ScanField.GetLasers(str:Name)"
    },
    {
      "Name": "ScanField.GetMarkDelay",
      "Synopsis": "num:MarkDelay,I32:Error=ScanField.GetMarkDelay(str:Name)"
    },
    {
      "Name": "ScanField.GetMethod",
      "Synopsis": "str:Method,I32:Error=ScanField.GetMethod(str:Name)"
    },
    {
      "Name": "ScanField.GetParameterset",
      "Synopsis": "tab:Parameterset,I32:Error=ScanField.GetParameterset(str:Name)"
    },
    {
      "Name": "ScanField.GetPolygonDelay",
      "Synopsis": "num:PolygonDelay,I32:Error=ScanField.GetPolygonDelay(str:Name)"
    },
    {
      "Name": "ScanField.GetRotation",
      "Synopsis": "num:Rotation,I32:Error=ScanField.GetRotation(str:Name)"
    },
    {
      "Name": "ScanField.GetRotationOffset",
      "Synopsis": "num:RotationOffset,I32:Error=ScanField.GetRotationOffset(str:Name)"
    },
    {
      "Name": "ScanField.GetScanModule",
      "Synopsis": "obj:ScanModuleObject,I32:Error=ScanField.GetScanModule(str:Name)"
    },
    {
      "Name": "ScanField.GetXHome",
      "Synopsis": "num:XHome,I32:Error=ScanField.GetXHome(str:Name)"
    },
    {
      "Name": "ScanField.GetXLimits",
      "Synopsis": "num:XMin,num:XMax,I32:Error=ScanField.GetXLimits(str:Name)"
    },
    {
      "Name": "ScanField.GetXOffset",
      "Synopsis": "num:XOffset,I32:Error=ScanField.GetXOffset(str:Name)"
    },
    {
      "Name": "ScanField.GetXOrigin",
      "Synopsis": "num:XOrigin,I32:Error=ScanField.GetXOrigin(str:Name)"
    },
    {
      "Name": "ScanField.GetYHome",
      "Synopsis": "num:YHome,I32:Error=ScanField.GetYHome(str:Name)"
    },
    {
      "Name": "ScanField.GetYLimits",
      "Synopsis": "num:YMin,num:YMax,I32:Error=ScanField.GetYLimits(str:Name)"
    },
    {
      "Name": "ScanField.GetYOffset",
      "Synopsis": "num:YOffset,I32:Error=ScanField.GetYOffset(str:Name)"
    },
    {
      "Name": "ScanField.GetYOrigin",
      "Synopsis": "num:YOrigin,I32:Error=ScanField.GetYOrigin(str:Name)"
    },
    {
      "Name": "ScanField.GetZDelay",
      "Synopsis": "num:ZDelay,I32:Error=ScanField.GetZDelay(str:Name)"
    },
    {
      "Name": "ScanField.GetZHome",
      "Synopsis": "num:ZHome,I32:Error=ScanField.GetZHome(str:Name)"
    },
    {
      "Name": "ScanField.GetZLimits",
      "Synopsis": "num:ZMin,num:ZMax,I32:Error=ScanField.GetZLimits(str:Name)"
    },
    {
      "Name": "ScanField.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=ScanField.ListChannels(str:Name)"
    },
    {
      "Name": "ScanField.ListLasers",
      "Synopsis": "tab:LaserList,I32:Error=ScanField.ListLasers(str:Name)"
    },
    {
      "Name": "ScanField.MoveXY",
      "Synopsis": "I32:Error=ScanField.MoveXY(str:Name,num:X,num:Y,[num:Speed])"
    },
    {
      "Name": "ScanField.MoveZ",
      "Synopsis": "I32:Error=ScanField.MoveZ(str:Name,num:Z)"
    },
    {
      "Name": "ScanField.NewDataBlock",
      "Synopsis": "obj:DataBlockObject,I32:Error=ScanField.NewDataBlock(str:Name)"
    },
    {
      "Name": "ScanField.ScanDataBlocks",
      "Synopsis": "I32:Error=ScanField.ScanDataBlocks(str:Name)"
    },
    {
      "Name": "ScanField.SetAlign",
      "Synopsis": "I32:Error=ScanField.SetAlign(str:Name,bool:Align)"
    },
    {
      "Name": "ScanField.SetAngleThreshold",
      "Synopsis": "I32:Error=ScanField.SetAngleThreshold(str:Name,num:LowerAngleThreshold)"
    },
    {
      "Name": "ScanField.SetJumpDelay",
      "Synopsis": "I32:Error=ScanField.SetJumpDelay(str:Name,num:JumpDelay)"
    },
    {
      "Name": "ScanField.SetJumpSpeed",
      "Synopsis": "I32:Error=ScanField.SetJumpSpeed(str:Name,num:JumpSpeed)"
    },
    {
      "Name": "ScanField.SetLaserDiameter",
      "Synopsis": "I32:Error=ScanField.SetLaserDiameter(str:Name,num:Diameter,str:LaserName,[I32:LaserIndex])"
    },
    {
      "Name": "ScanField.SetMarkDelay",
      "Synopsis": "I32:Error=ScanField.SetMarkDelay(str:Name,num:MarkDelay)"
    },
    {
      "Name": "ScanField.SetMethod",
      "Synopsis": "I32:Error=ScanField.SetMethod(str:Name,str:Method)"
    },
    {
      "Name": "ScanField.SetParameterset",
      "Synopsis": "I32:Error=ScanField.SetParameterset(str:Name,tab:Parameterset)"
    },
    {
      "Name": "ScanField.SetPolygonDelay",
      "Synopsis": "I32:Error=ScanField.SetPolygonDelay(str:Name,num:PolygonDelay)"
    },
    {
      "Name": "ScanField.SetRotation",
      "Synopsis": "I32:Error=ScanField.SetRotation(str:Name,num:Rotation)"
    },
    {
      "Name": "ScanField.SetRotationOffset",
      "Synopsis": "I32:Error=ScanField.SetRotationOffset(str:Name,num:RotationOffset)"
    },
    {
      "Name": "ScanField.SetXHome",
      "Synopsis": "I32:Error=ScanField.SetXHome(str:Name,num:XHome)"
    },
    {
      "Name": "ScanField.SetXLimits",
      "Synopsis": "I32:Error=ScanField.SetXLimits(str:Name,num:XMax,num:XMin)"
    },
    {
      "Name": "ScanField.SetXOffset",
      "Synopsis": "I32:Error=ScanField.SetXOffset(str:Name,num:XOffset)"
    },
    {
      "Name": "ScanField.SetXOrigin",
      "Synopsis": "I32:Error=ScanField.SetXOrigin(str:Name,num:XOrigin)"
    },
    {
      "Name": "ScanField.SetYHome",
      "Synopsis": "I32:Error=ScanField.SetYHome(str:Name,num:YHome)"
    },
    {
      "Name": "ScanField.SetYLimits",
      "Synopsis": "I32:Error=ScanField.SetYLimits(str:Name,num:YMax,num:YMin)"
    },
    {
      "Name": "ScanField.SetYOffset",
      "Synopsis": "I32:Error=ScanField.SetYOffset(str:Name,num:YOffset)"
    },
    {
      "Name": "ScanField.SetYOrigin",
      "Synopsis": "I32:Error=ScanField.SetYOrigin(str:Name,num:YOrigin)"
    },
    {
      "Name": "ScanField.SetZDelay",
      "Synopsis": "I32:Error=ScanField.SetZDelay(str:Name,num:ZDelay)"
    },
    {
      "Name": "ScanField.SetZHome",
      "Synopsis": "I32:Error=ScanField.SetZHome(str:Name,num:ZHome)"
    },
    {
      "Name": "ScanField.SetZLimits",
      "Synopsis": "I32:Error=ScanField.SetZLimits(str:Name,num:ZMax,num:ZMin)"
    },
    {
      "Name": "ScanSystem.Abort",
      "Synopsis": "I32:Error=ScanSystem.Abort(str:Name)"
    },
    {
      "Name": "ScanSystem.CloseJob",
      "Synopsis": "I32:Error=ScanSystem.CloseJob(str:Name)"
    },
    {
      "Name": "ScanSystem.GetJob",
      "Synopsis": "obj:JobObject,I32:Error=ScanSystem.GetJob(str:Name)"
    },
    {
      "Name": "ScanSystem.GetJobFileLocation",
      "Synopsis": "str:JobFileLocation,I32:Error=ScanSystem.GetJobFileLocation(str:Name)"
    },
    {
      "Name": "ScanSystem.GetJobProperty",
      "Synopsis": "any:PropertyValue,I32:Error=ScanSystem.GetJobProperty(str:Name,str:Property)"
    },
    {
      "Name": "ScanSystem.GetJobType",
      "Synopsis": "str:JobType,I32:Error=ScanSystem.GetJobType(str:Name)"
    },
    {
      "Name": "ScanSystem.GetJobXPathElementValue",
      "Synopsis": "str:Value,I32:Error=ScanSystem.GetJobXPathElementValue(str:Name,str:Property)"
    },
    {
      "Name": "ScanSystem.GetLayerScanTime",
      "Synopsis": "num:ScanTime,I32:Error=ScanSystem.GetLayerScanTime(str:Name,U32:Layer)"
    },
    {
      "Name": "ScanSystem.GetPartStatus",
      "Synopsis": "bool:Enabled,I32:Error=ScanSystem.GetPartStatus(str:Name,I32:PartIndex)"
    },
    {
      "Name": "ScanSystem.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=ScanSystem.ListChannels(str:Name)"
    },
    {
      "Name": "ScanSystem.ListJobFiles",
      "Synopsis": "tab:JobFileList,I32:Error=ScanSystem.ListJobFiles(str:Name)"
    },
    {
      "Name": "ScanSystem.ListParts",
      "Synopsis": "tab:Parts,I32:Error=ScanSystem.ListParts(str:Name)"
    },
    {
      "Name": "ScanSystem.ListScanFields",
      "Synopsis": "tab:ScanFieldList,I32:Error=ScanSystem.ListScanFields(str:Name)"
    },
    {
      "Name": "ScanSystem.LoadJob",
      "Synopsis": "I32:Error=ScanSystem.LoadJob(str:Name,str:JobPath)"
    },
    {
      "Name": "ScanSystem.LoadLayer",
      "Synopsis": "I32:Error,tab:LayerObject=ScanSystem.LoadLayer(str:Name,I32:Layer,[bool:LoadDatablocks])"
    },
    {
      "Name": "ScanSystem.ScanLayer",
      "Synopsis": "I32:Error=ScanSystem.ScanLayer(str:Name,[I32:LayerIndex])"
    },
    {
      "Name": "ScanSystem.SetJobFileLocation",
      "Synopsis": "I32:Error=ScanSystem.SetJobFileLocation(str:Name,str:JobFileLocation)"
    },
    {
      "Name": "ScanSystem.SetJobType",
      "Synopsis": "I32:Error=ScanSystem.SetJobType(str:Name,str:JobType)"
    },
    {
      "Name": "ScanSystem.SetPartStatus",
      "Synopsis": "I32:Error=ScanSystem.SetPartStatus(str:Name,I32:PartIndex,bool:Enabled)"
    },
    {
      "Name": "ScriptService.CompileScript",
      "Synopsis": "bool:CompileError,I32:Error=ScriptService.CompileScript(str:Name,str:ScriptName,str:ScriptBody)"
    },
    {
      "Name": "ScriptService.GetScriptRootPath",
      "Synopsis": "str:ScriptRootPath,I32:Error=ScriptService.GetScriptRootPath()"
    },
    {
      "Name": "ScriptService.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=ScriptService.ListChannels(str:Name)"
    },
    {
      "Name": "ScriptService.RunScript",
      "Synopsis": "I32:Error=ScriptService.RunScript(str:Name)"
    },
    {
      "Name": "ScriptService.StartScript",
      "Synopsis": "I32:Error=ScriptService.StartScript(str:Name,str:Script)"
    },
    {
      "Name": "ScriptService.StopScript",
      "Synopsis": "I32:Error=ScriptService.StopScript(str:Name)"
    },
    {
      "Name": "StepperMotion.GetGain",
      "Synopsis": "num:EU_Step,I32:Error=StepperMotion.GetGain(str:Name)"
    },
    {
      "Name": "StepperMotion.SetGain",
      "Synopsis": "I32:Error=StepperMotion.SetGain(str:Name,num:EU_Step)"
    },
    {
      "Name": "Subscription.Create",
      "Synopsis": "ref:Subscription,I32:Error=Subscription.Create(tab:ChannelList)"
    },
    {
      "Name": "Subscription.Destroy",
      "Synopsis": "I32:Error=Subscription.Destroy(ref:Subscription)"
    },
    {
      "Name": "Subscription.WaitForEvent",
      "Synopsis": "str:ChannelName,any:Value,I32:Error=Subscription.WaitForEvent(ref:Subscription,[I32:Timeout])"
    },
    {
      "Name": "SysExec",
      "Synopsis": "str:stdOutput,str:stdError,I32:Error=SysExec(str:Command)"
    },
    {
      "Name": "TEST.AddTrajectoryData",
      "Synopsis": "TEST.AddTrajectoryData(obj:DataBlockObject,tab:TrajectoryData)"
    },
    {
      "Name": "TEST.Generate",
      "Synopsis": "TEST.Generate(obj:DataBlockObject)"
    },
    {
      "Name": "TEST.GenerateTrajectoryData",
      "Synopsis": "TEST.GenerateTrajectoryData(obj:DataBlockObject,tab:Trajectories)"
    },
    {
      "Name": "TEST.GenerateTrajectoryDataFromJSON",
      "Synopsis": "TEST.GenerateTrajectoryDataFromJSON(obj:DataBlockObject,str:Path)"
    },
    {
      "Name": "TEST.TrajectoryDataFromJSON",
      "Synopsis": "tab:TrajectoryData=TEST.TrajectoryDataFromJSON(str:Path)"
    },
    {
      "Name": "Timer.Create",
      "Synopsis": "I32:Error=Timer.Create(str:Name)"
    },
    {
      "Name": "Timer.Destroy",
      "Synopsis": "I32:Error=Timer.Destroy(str:Name)"
    },
    {
      "Name": "Timer.ElapsedTime",
      "Synopsis": "num:ElapsedTime,I32:Error=Timer.ElapsedTime(str:Name)"
    },
    {
      "Name": "Timer.Reset",
      "Synopsis": "I32:Error=Timer.Reset(str:Name)"
    },
    {
      "Name": "Timer.Start",
      "Synopsis": "I32:Error=Timer.Start(str:Name)"
    },
    {
      "Name": "Timer.Stop",
      "Synopsis": "I32:Error=Timer.Stop(str:Name)"
    },
    {
      "Name": "VirtualMotion.RegisterForEvent",
      "Synopsis": "ref:EventReg,I32:Error=VirtualMotion.RegisterForEvent(str:VirtualMotionName)"
    },
    {
      "Name": "VirtualMotion.RegisterForEvents",
      "Synopsis": "ref:EventReg,I32:Error=VirtualMotion.RegisterForEvents(tab:VirtualMotionList)"
    },
    {
      "Name": "VirtualMotion.UnregisterForEvents",
      "Synopsis": "I32:Error=VirtualMotion.UnregisterForEvents(ref:EventReg)"
    },
    {
      "Name": "VirtualMotion.WaitForEvent",
      "Synopsis": "str:Name,str:Command,any:Arguments,I32:Error=VirtualMotion.WaitForEvent(ref:EventReg,[I32:Timeout])"
    },
    {
      "Name": "pause",
      "Synopsis": "pause()"
    },
    {
      "Name": "ADSObject.Open",
      "Synopsis": "obj:ADSObject,str:SessionName=ADSObject.Open(str:SessionName,str:TargetIP,U16:TargetPort,str:TargetAMSID,U16:TargetAMSPort,str:SourceAMSID,U16:SourceAMSPort,[bool:InitSymbols])"
    },
    {
      "Name": "ADSObject.Release",
      "Synopsis": "ADSObject.Release(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.Close",
      "Synopsis": "ADSObject.Close(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.GetReadTimeout",
      "Synopsis": "I32:ReadTimeout=ADSObject.GetReadTimeout(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.GetSession",
      "Synopsis": "[obj:ADSObject]=ADSObject.GetSession([str:SessionName])"
    },
    {
      "Name": "ADSObject.GetSymbol",
      "Synopsis": "tab:Symbol=ADSObject.GetSymbol(obj:ADSObject,str:SymbolName)"
    },
    {
      "Name": "ADSObject.InitSymbols",
      "Synopsis": "I32:Count=ADSObject.InitSymbols(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.ListSymbols",
      "Synopsis": "tab:SymbolNames=ADSObject.ListSymbols(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.ReadDeviceInfo",
      "Synopsis": "str:DeviceName,tab:Version=ADSObject.ReadDeviceInfo(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.ReadStatus",
      "Synopsis": "str:ADSState,U16:DeviceState=ADSObject.ReadStatus(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.ReadSymbol",
      "Synopsis": "any:Value=ADSObject.ReadSymbol(obj:ADSObject,str:SymbolName)"
    },
    {
      "Name": "ADSObject.ReadSymbols",
      "Synopsis": "[any:Value]=ADSObject.ReadSymbols(obj:ADSObject,tab:SymbolNames)"
    },
    {
      "Name": "ADSObject.ReadSymbolsInfo",
      "Synopsis": "tab:SymbolInfo=ADSObject.ReadSymbolsInfo(obj:ADSObject)"
    },
    {
      "Name": "ADSObject.SetReadTimeout",
      "Synopsis": "ADSObject.SetReadTimeout(obj:ADSObject,I32:ReadTimeout)"
    },
    {
      "Name": "ADSObject.WriteControl",
      "Synopsis": "ADSObject.WriteControl(obj:ADSObject,str:ADSState,U16:DeviceState,[tab:Data])"
    },
    {
      "Name": "ADSObject.WriteSymbol",
      "Synopsis": "ADSObject.WriteSymbol(obj:ADSObject,str:SymbolName,any:Value)"
    },
    {
      "Name": "ADSObject.WriteSymbols",
      "Synopsis": "ADSObject.WriteSymbols(obj:ADSObject,tab:SymbolNames,[any:Values],...)"
    },
    {
      "Name": "Camera.Close",
      "Synopsis": "I32:Error=Camera.Close(str:Session)"
    },
    {
      "Name": "Camera.Open",
      "Synopsis": "str:Session,I32:Error=Camera.Open(str:Camera)"
    },
    {
      "Name": "Camera.ReadAttribute",
      "Synopsis": "str:Attribute,I32:Error=Camera.ReadAttribute(str:Session,str:ActiveAttribute,U8:Datatype)"
    },
    {
      "Name": "Camera.SnapShot",
      "Synopsis": "I32:Error=Camera.SnapShot(str:Session,str:ImagePath,U8:type)"
    },
    {
      "Name": "Camera.WriteAttribute",
      "Synopsis": "I32:Error=Camera.WriteAttribute(str:Session,str:ActiveAttribute,U8:Datatype,str:Value)"
    },
    {
      "Name": "CameraObject.Create",
      "Synopsis": "obj:CameraObject=CameraObject.Create(str:Session,[bool:EnumerateAttr])"
    },
    {
      "Name": "CameraObject.Release",
      "Synopsis": "CameraObject.Release(obj:CameraObject)"
    },
    {
      "Name": "CameraObject.Destroy",
      "Synopsis": "CameraObject.Destroy(obj:CameraObject)"
    },
    {
      "Name": "CameraObject.ConfigureAcquisition",
      "Synopsis": "CameraObject.ConfigureAcquisition(obj:CameraObject,str:Mode,[U32:Count])"
    },
    {
      "Name": "CameraObject.EnumerateAttributes",
      "Synopsis": "tab:Attributes=CameraObject.EnumerateAttributes(obj:CameraObject)"
    },
    {
      "Name": "CameraObject.EnumerateCameras",
      "Synopsis": "tab:Cameras=CameraObject.EnumerateCameras()"
    },
    {
      "Name": "CameraObject.GetImage",
      "Synopsis": "CameraObject.GetImage(obj:CameraObject,obj:ImageObject,[I32:Timeout])"
    },
    {
      "Name": "CameraObject.ReadAttribute",
      "Synopsis": "any:Value=CameraObject.ReadAttribute(obj:CameraObject,str:Name)"
    },
    {
      "Name": "CameraObject.SnapShot",
      "Synopsis": "CameraObject.SnapShot(obj:CameraObject,str:Path,[str:Type])"
    },
    {
      "Name": "CameraObject.StartAcquisition",
      "Synopsis": "CameraObject.StartAcquisition(obj:CameraObject)"
    },
    {
      "Name": "CameraObject.StopAcquisition",
      "Synopsis": "CameraObject.StopAcquisition(obj:CameraObject)"
    },
    {
      "Name": "CameraObject.UnconfigureAcquisition",
      "Synopsis": "CameraObject.UnconfigureAcquisition(obj:CameraObject)"
    },
    {
      "Name": "CameraObject.WriteAttribute",
      "Synopsis": "CameraObject.WriteAttribute(obj:CameraObject,str:Name,any:Value)"
    },
    {
      "Name": "Channel.GetDataType",
      "Synopsis": "str:DataType,I32:Error=Channel.GetDataType(str:Name)"
    },
    {
      "Name": "Channel.GetDescription",
      "Synopsis": "str:Description,I32:Error=Channel.GetDescription(str:Name)"
    },
    {
      "Name": "Channel.GetGain",
      "Synopsis": "num:Gain,I32:Error=Channel.GetGain(str:Name)"
    },
    {
      "Name": "Channel.GetIndex",
      "Synopsis": "I32:Index,I32:Error=Channel.GetIndex(str:Name)"
    },
    {
      "Name": "Channel.GetMaxValue",
      "Synopsis": "num:Max,I32:Error=Channel.GetMaxValue(str:Name)"
    },
    {
      "Name": "Channel.GetMinValue",
      "Synopsis": "num:Min,I32:Error=Channel.GetMinValue(str:Name)"
    },
    {
      "Name": "Channel.GetOffset",
      "Synopsis": "num:Offset,I32:Error=Channel.GetOffset(str:Name)"
    },
    {
      "Name": "Channel.GetUnit",
      "Synopsis": "str:Unit,I32:Error=Channel.GetUnit(str:Name)"
    },
    {
      "Name": "Channel.Read",
      "Synopsis": "any:Value,I32:Error=Channel.Read(str:Name)"
    },
    {
      "Name": "Channel.SetDescription",
      "Synopsis": "I32:Error=Channel.SetDescription(str:Name,str:Description)"
    },
    {
      "Name": "Channel.SetGain",
      "Synopsis": "I32:Error=Channel.SetGain(str:Name,num:Gain)"
    },
    {
      "Name": "Channel.SetMaxValue",
      "Synopsis": "I32:Error=Channel.SetMaxValue(str:Name,num:Max)"
    },
    {
      "Name": "Channel.SetMinValue",
      "Synopsis": "I32:Error=Channel.SetMinValue(str:Name,num:Min)"
    },
    {
      "Name": "Channel.SetOffset",
      "Synopsis": "I32:Error=Channel.SetOffset(str:Name,num:Offset)"
    },
    {
      "Name": "Channel.SetUnit",
      "Synopsis": "I32:Error=Channel.SetUnit(str:Name,str:Unit)"
    },
    {
      "Name": "Channel.Write",
      "Synopsis": "I32:Error=Channel.Write(str:Name,any:Value)"
    },
    {
      "Name": "Channel.WriteNS",
      "Synopsis": "I32:Error=Channel.WriteNS(str:Name,any:Value)"
    },
    {
      "Name": "ChannelObject.Get",
      "Synopsis": "obj:ChannelObject=ChannelObject.Get(str:ChannelName)"
    },
    {
      "Name": "ChannelObject.Release",
      "Synopsis": "ChannelObject.Release(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.Read",
      "Synopsis": "any:Value=ChannelObject.Read(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.Write",
      "Synopsis": "ChannelObject.Write(obj:ChannelObject,any:Value)"
    },
    {
      "Name": "ChannelObject.WriteNS",
      "Synopsis": "ChannelObject.WriteNS(obj:ChannelObject,any:Value)"
    },
    {
      "Name": "ChannelObject.GetMaxValue",
      "Synopsis": "num:MaxValue=ChannelObject.GetMaxValue(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetMaxValue",
      "Synopsis": "ChannelObject.SetMaxValue(obj:ChannelObject,num:MaxValue)"
    },
    {
      "Name": "ChannelObject.GetMinValue",
      "Synopsis": "num:MinValue=ChannelObject.GetMinValue(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetMinValue",
      "Synopsis": "ChannelObject.SetMinValue(obj:ChannelObject,num:MinValue)"
    },
    {
      "Name": "ChannelObject.GetGUID",
      "Synopsis": "any:PropertyValue=ChannelObject.GetGUID(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetGUID",
      "Synopsis": "ChannelObject.SetGUID(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetName",
      "Synopsis": "any:PropertyValue=ChannelObject.GetName(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetName",
      "Synopsis": "ChannelObject.SetName(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetClass",
      "Synopsis": "any:PropertyValue=ChannelObject.GetClass(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetClass",
      "Synopsis": "ChannelObject.SetClass(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetOwner",
      "Synopsis": "any:PropertyValue=ChannelObject.GetOwner(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetOwner",
      "Synopsis": "ChannelObject.SetOwner(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetDescription",
      "Synopsis": "any:PropertyValue=ChannelObject.GetDescription(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetDescription",
      "Synopsis": "ChannelObject.SetDescription(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetUnit",
      "Synopsis": "any:PropertyValue=ChannelObject.GetUnit(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetUnit",
      "Synopsis": "ChannelObject.SetUnit(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetDataType",
      "Synopsis": "any:PropertyValue=ChannelObject.GetDataType(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetDataType",
      "Synopsis": "ChannelObject.SetDataType(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetEventType",
      "Synopsis": "any:PropertyValue=ChannelObject.GetEventType(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetEventType",
      "Synopsis": "ChannelObject.SetEventType(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetValue",
      "Synopsis": "any:PropertyValue=ChannelObject.GetValue(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetValue",
      "Synopsis": "ChannelObject.SetValue(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetGain",
      "Synopsis": "any:PropertyValue=ChannelObject.GetGain(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetGain",
      "Synopsis": "ChannelObject.SetGain(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetOffset",
      "Synopsis": "any:PropertyValue=ChannelObject.GetOffset(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetOffset",
      "Synopsis": "ChannelObject.SetOffset(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetIndex",
      "Synopsis": "any:PropertyValue=ChannelObject.GetIndex(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetIndex",
      "Synopsis": "ChannelObject.SetIndex(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetMaximum",
      "Synopsis": "any:PropertyValue=ChannelObject.GetMaximum(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetMaximum",
      "Synopsis": "ChannelObject.SetMaximum(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetMinimum",
      "Synopsis": "any:PropertyValue=ChannelObject.GetMinimum(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetMinimum",
      "Synopsis": "ChannelObject.SetMinimum(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "ChannelObject.GetPersistent",
      "Synopsis": "any:PropertyValue=ChannelObject.GetPersistent(obj:ChannelObject)"
    },
    {
      "Name": "ChannelObject.SetPersistent",
      "Synopsis": "ChannelObject.SetPersistent(obj:ChannelObject,any:PropertyValue)"
    },
    {
      "Name": "DataBlockObject.Create",
      "Synopsis": "obj:DataBlockObject=DataBlockObject.Create()"
    },
    {
      "Name": "DataBlockObject.Destroy",
      "Synopsis": "DataBlockObject.Destroy(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.Release",
      "Synopsis": "DataBlockObject.Release(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.AddLaserSet",
      "Synopsis": "DataBlockObject.AddLaserSet(obj:DataBlockObject,obj:LaserObject,num:Power,num:Diameter)"
    },
    {
      "Name": "DataBlockObject.AddLinearTrajectory",
      "Synopsis": "DataBlockObject.AddLinearTrajectory(obj:DataBlockObject,tab:Start,tab:End,bool:Mark,num:Speed,num:EndDelay)"
    },
    {
      "Name": "DataBlockObject.AddPointTrajectories",
      "Synopsis": "DataBlockObject.AddPointTrajectories(obj:DataBlockObject,tab:Points,num:EndDelay)"
    },
    {
      "Name": "DataBlockObject.AddPointTrajectory",
      "Synopsis": "DataBlockObject.AddPointTrajectory(obj:DataBlockObject,tab:Point,num:EndDelay)"
    },
    {
      "Name": "DataBlockObject.AddTrajectory2",
      "Synopsis": "DataBlockObject.AddTrajectory2(obj:DataBlockObject,tab:Trajectory)"
    },
    {
      "Name": "DataBlockObject.AddTrajectory",
      "Synopsis": "DataBlockObject.AddTrajectory(obj:DataBlockObject,tab:CPoints,bool:Mark,num:Speed,num:EndDelay)"
    },
    {
      "Name": "DataBlockObject.GenerateTrajectoryData",
      "Synopsis": "DataBlockObject.GenerateTrajectoryData(obj:DataBlockObject,tab:Vectors)"
    },
    {
      "Name": "DataBlockObject.GetAttribute",
      "Synopsis": "any:Attribute=DataBlockObject.GetAttribute(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetAttributes",
      "Synopsis": "tab:Attributes=DataBlockObject.GetAttributes(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetBoundingBox",
      "Synopsis": "tab:BoundingBox=DataBlockObject.GetBoundingBox(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetDependencies",
      "Synopsis": "tab:Dependencies=DataBlockObject.GetDependencies(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetEndDelay",
      "Synopsis": "num:EndDelay=DataBlockObject.GetEndDelay(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetEndPosition",
      "Synopsis": "tab:EndPosition=DataBlockObject.GetEndPosition(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetIndex",
      "Synopsis": "I32:Index=DataBlockObject.GetIndex(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.SetIndex",
      "Synopsis": "DataBlockObject.SetIndex(obj:DataBlockObject,I32:Index)"
    },
    {
      "Name": "DataBlockObject.GetJumpDelay",
      "Synopsis": "num:JumpDelay=DataBlockObject.GetJumpDelay(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetJumpSpeed",
      "Synopsis": "num:JumpSpeed=DataBlockObject.GetJumpSpeed(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetMarkDelay",
      "Synopsis": "num:MarkDelay=DataBlockObject.GetMarkDelay(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetMarkSpeed",
      "Synopsis": "num:MarkSpeed=DataBlockObject.GetMarkSpeed(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetPartID",
      "Synopsis": "I32:PartID=DataBlockObject.GetPartID(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetPolygonDelay",
      "Synopsis": "num:PolygonDelay=DataBlockObject.GetPolygonDelay(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetStartDelay",
      "Synopsis": "num:StartDelay=DataBlockObject.GetStartDelay(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetStartPosition",
      "Synopsis": "tab:StartPosition=DataBlockObject.GetStartPosition(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetType",
      "Synopsis": "str:Type=DataBlockObject.GetType(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.SetJumpDelay",
      "Synopsis": "DataBlockObject.SetJumpDelay(obj:DataBlockObject,num:JumpDelay)"
    },
    {
      "Name": "DataBlockObject.SetJumpSpeed",
      "Synopsis": "DataBlockObject.SetJumpSpeed(obj:DataBlockObject,num:JumpSpeed)"
    },
    {
      "Name": "DataBlockObject.SetMarkDelay",
      "Synopsis": "DataBlockObject.SetMarkDelay(obj:DataBlockObject,num:MarkDelay)"
    },
    {
      "Name": "DataBlockObject.SetMarkSpeed",
      "Synopsis": "DataBlockObject.SetMarkSpeed(obj:DataBlockObject,num:MarkSpeed)"
    },
    {
      "Name": "DataBlockObject.SetPolygonDelay",
      "Synopsis": "DataBlockObject.SetPolygonDelay(obj:DataBlockObject,num:PolygonDelay)"
    },
    {
      "Name": "DataBlockObject.Statistics",
      "Synopsis": "tab:Statistics=DataBlockObject.Statistics(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetTrajectoryCount",
      "Synopsis": "I32:Count=DataBlockObject.GetTrajectoryCount(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetTrajectory",
      "Synopsis": "tab:Trajectory=DataBlockObject.GetTrajectory(obj:DataBlockObject,I32:Index)"
    },
    {
      "Name": "DataBlockObject.SetTrajectory",
      "Synopsis": "DataBlockObject.SetTrajectory(obj:DataBlockObject,tab:Trajectory,I32:Index)"
    },
    {
      "Name": "DataBlockObject.RemoveTrajectory",
      "Synopsis": "tab:Trajectory=DataBlockObject.RemoveTrajectory(obj:DataBlockObject,I32:Index)"
    },
    {
      "Name": "DataBlockObject.InsertTrajectory",
      "Synopsis": "DataBlockObject.InsertTrajectory(obj:DataBlockObject,tab:Trajectory,I32:Index)"
    },
    {
      "Name": "DataBlockObject.SetMethod",
      "Synopsis": "DataBlockObject.SetMethod(obj:DataBlockObject,str:Method)"
    },
    {
      "Name": "DataBlockObject.GetMethod",
      "Synopsis": "str:Method=DataBlockObject.GetMethod(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.SetAngleThreshold",
      "Synopsis": "DataBlockObject.SetAngleThreshold(obj:DataBlockObject,num:AngleThreshold)"
    },
    {
      "Name": "DataBlockObject.GetAngleThreshold",
      "Synopsis": "num:AngleThreshold=DataBlockObject.GetAngleThreshold(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.SetLaserPower",
      "Synopsis": "DataBlockObject.SetLaserPower(obj:DataBlockObject,num:Power,[I32:LaserIndex])"
    },
    {
      "Name": "DataBlockObject.GetLaserPower",
      "Synopsis": "num:Power=DataBlockObject.GetLaserPower(obj:DataBlockObject,[I32:LaserIndex])"
    },
    {
      "Name": "DataBlockObject.SetLaserDiameter",
      "Synopsis": "DataBlockObject.SetLaserDiameter(obj:DataBlockObject,num:Diameter,[I32:LaserIndex])"
    },
    {
      "Name": "DataBlockObject.GetLaserDiameter",
      "Synopsis": "num:Diameter=DataBlockObject.GetLaserDiameter(obj:DataBlockObject,[I32:LaserIndex])"
    },
    {
      "Name": "DataBlockObject.GetMarkSegmentCount",
      "Synopsis": "I32:Count=DataBlockObject.GetMarkSegmentCount(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetJumpSegmentCount",
      "Synopsis": "I32:Count=DataBlockObject.GetJumpSegmentCount(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetJumpDistance",
      "Synopsis": "num:JumpDistance=DataBlockObject.GetJumpDistance(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetMarkDistance",
      "Synopsis": "num:MarkDistance=DataBlockObject.GetMarkDistance(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.GetParameterset",
      "Synopsis": "obj:ParametersetObject=DataBlockObject.GetParameterset(obj:DataBlockObject)"
    },
    {
      "Name": "DataBlockObject.SetParameterset",
      "Synopsis": "DataBlockObject.SetParameterset(obj:DataBlockObject,obj:ParametersetObject)"
    },
    {
      "Name": "EventObject.Create",
      "Synopsis": "obj:EventObject=EventObject.Create()"
    },
    {
      "Name": "EventObject.Add",
      "Synopsis": "EventObject.Add(obj:EventObject,...)"
    },
    {
      "Name": "EventObject.Destroy",
      "Synopsis": "EventObject.Destroy(obj:EventObject)"
    },
    {
      "Name": "EventObject.Flush",
      "Synopsis": "EventObject.Flush(obj:EventObject)"
    },
    {
      "Name": "EventObject.Register",
      "Synopsis": "EventObject.Register(obj:EventObject)"
    },
    {
      "Name": "EventObject.Remove",
      "Synopsis": "EventObject.Remove(obj:EventObject,...)"
    },
    {
      "Name": "EventObject.SetTimeout",
      "Synopsis": "EventObject.SetTimeout(obj:EventObject,num:Timeout)"
    },
    {
      "Name": "EventObject.Unregister",
      "Synopsis": "EventObject.Unregister(obj:EventObject)"
    },
    {
      "Name": "EventObject.WaitForEvent",
      "Synopsis": "str:EventType,...=EventObject.WaitForEvent(obj:EventObject)"
    },
    {
      "Name": "FPGALogObject.Create",
      "Synopsis": "obj:FPGALogObject=FPGALogObject.Create(obj:TargetObject,str:Path,[str:Type])"
    },
    {
      "Name": "FPGALogObject.AddRegister",
      "Synopsis": "FPGALogObject.AddRegister(obj:FPGALogObject,U16:Register)"
    },
    {
      "Name": "FPGALogObject.AddChannel",
      "Synopsis": "FPGALogObject.AddChannel(obj:FPGALogObject,obj:ChannelObject)"
    },
    {
      "Name": "FPGALogObject.Start",
      "Synopsis": "FPGALogObject.Start(obj:FPGALogObject,num:Period)"
    },
    {
      "Name": "FPGALogObject.Stop",
      "Synopsis": "FPGALogObject.Stop(obj:FPGALogObject)"
    },
    {
      "Name": "FPGALogObject.Destroy",
      "Synopsis": "FPGALogObject.Destroy(obj:FPGALogObject)"
    },
    {
      "Name": "HTTP.Open",
      "Synopsis": "ref:HTTP,I32:Error=HTTP.Open(str:Username,str:Password)"
    },
    {
      "Name": "HTTP.ListHeaders",
      "Synopsis": "str:Headers,I32:Error=HTTP.ListHeaders(ref:HTTP)"
    },
    {
      "Name": "HTTP.GetHeader",
      "Synopsis": "I32:Error,str:Header=HTTP.GetHeader(ref:HTTP,str:Name)"
    },
    {
      "Name": "HTTP.AddHeader",
      "Synopsis": "I32:Error=HTTP.AddHeader(ref:HTTP,str:Name,str:Value)"
    },
    {
      "Name": "HTTP.RemoveHeader",
      "Synopsis": "I32:Error=HTTP.RemoveHeader(ref:HTTP,str:Name)"
    },
    {
      "Name": "HTTP.DELETE",
      "Synopsis": "str:Headers,str:Body,I32:Error=HTTP.DELETE(ref:HTTP,str:URL,[I32:Timeout])"
    },
    {
      "Name": "HTTP.GET",
      "Synopsis": "str:Headers,str:Body,I32:Error=HTTP.GET(ref:HTTP,str:URL,[I32:Timeout])"
    },
    {
      "Name": "HTTP.HEAD",
      "Synopsis": "str:Headers,I32:Error=HTTP.HEAD(ref:HTTP,str:URL,[I32:Timeout])"
    },
    {
      "Name": "HTTP.POST",
      "Synopsis": "str:Headers,str:Body,I32:Error=HTTP.POST(ref:HTTP,str:URL,str:Body,[I32:Timeout])"
    },
    {
      "Name": "HTTP.POSTFile",
      "Synopsis": "str:Headers,str:Body,I32:Error=HTTP.POSTFile(ref:HTTP,str:URL,str:File,[I32:Timeout])"
    },
    {
      "Name": "HTTP.POSTMultipart",
      "Synopsis": "str:Headers,str:Body,I32:Error=HTTP.POSTMultipart(ref:HTTP,str:URL,tab:Data,[I32:Timeout])"
    },
    {
      "Name": "HTTP.PUT",
      "Synopsis": "str:Headers,str:Body,I32:Error=HTTP.PUT(ref:HTTP,str:URL,str:Body,[I32:Timeout])"
    },
    {
      "Name": "HTTP.Close",
      "Synopsis": "I32:Error=HTTP.Close(ref:HTTP)"
    },
    {
      "Name": "ImageObject.Create",
      "Synopsis": "obj:ImageObject=ImageObject.Create()"
    },
    {
      "Name": "ImageObject.Release",
      "Synopsis": "ImageObject.Release(obj:ImageObject)"
    },
    {
      "Name": "ImageObject.Destroy",
      "Synopsis": "ImageObject.Destroy(obj:ImageObject)"
    },
    {
      "Name": "ImageObject.Save",
      "Synopsis": "ImageObject.Save(obj:ImageObject,str:Path,str:Type)"
    },
    {
      "Name": "ImageObject.VideoOut",
      "Synopsis": "ImageObject.VideoOut(obj:ImageObject)"
    },
    {
      "Name": "ImageObject.ConfigureVideoOut",
      "Synopsis": "ImageObject.ConfigureVideoOut(bool:Mode,U32:ScreenArea,U32:ColorDepth,U32:RefreshRate)"
    },
    {
      "Name": "JobObject.Create",
      "Synopsis": "obj:JobObject=JobObject.Create()"
    },
    {
      "Name": "JobObject.Release",
      "Synopsis": "JobObject.Release(obj:JobObject)"
    },
    {
      "Name": "JobObject.Destroy",
      "Synopsis": "JobObject.Destroy(obj:JobObject)"
    },
    {
      "Name": "JobObject.GetLayer",
      "Synopsis": "obj:LayerObject=JobObject.GetLayer(obj:JobObject,I32:Index)"
    },
    {
      "Name": "JobObject.GetLayers",
      "Synopsis": "[obj:LayerObject]=JobObject.GetLayers(obj:JobObject)"
    },
    {
      "Name": "JobObject.GetLayerThickness",
      "Synopsis": "num:LayerThickness=JobObject.GetLayerThickness(obj:JobObject)"
    },
    {
      "Name": "JobObject.GetPartStatus",
      "Synopsis": "bool:PartStatus=JobObject.GetPartStatus(obj:JobObject,I32:Status)"
    },
    {
      "Name": "JobObject.GetProperty",
      "Synopsis": "any:PropertyValue=JobObject.GetProperty(obj:JobObject,str:PropertyName,...)"
    },
    {
      "Name": "JobObject.GetRecoatingTime",
      "Synopsis": "num:RecoatingTime=JobObject.GetRecoatingTime(obj:JobObject)"
    },
    {
      "Name": "JobObject.ListParts",
      "Synopsis": "tab:Parts=JobObject.ListParts(obj:JobObject)"
    },
    {
      "Name": "JobObject.ListProperties",
      "Synopsis": "tab:PropertyNames=JobObject.ListProperties(obj:JobObject,str:PropertyName,...)"
    },
    {
      "Name": "JobObject.Load",
      "Synopsis": "obj:JobObject=JobObject.Load(str:FilePath,[str:Key])"
    },
    {
      "Name": "JobObject.LoadLayer",
      "Synopsis": "obj:LayerObject=JobObject.LoadLayer(obj:JobObject,I32:LayerIndex)"
    },
    {
      "Name": "JobObject.LoadLayerInformation",
      "Synopsis": "obj:LayerObject=JobObject.LoadLayerInformation(obj:JobObject,I32:LayerIndex)"
    },
    {
      "Name": "JobObject.SetPartStatus",
      "Synopsis": "JobObject.SetPartStatus(obj:JobObject,I32:PartID,bool:Status)"
    },
    {
      "Name": "Laser.GetDiameterCalibration",
      "Synopsis": "tab:CalibrationData,I32:Error=Laser.GetDiameterCalibration(str:Name)"
    },
    {
      "Name": "Laser.GetGate",
      "Synopsis": "bool:Gate=Laser.GetGate(str:Name)"
    },
    {
      "Name": "Laser.GetMaxDiameter",
      "Synopsis": "num:MaxDiameter,I32:Error=Laser.GetMaxDiameter(str:Name)"
    },
    {
      "Name": "Laser.GetMaxPower",
      "Synopsis": "num:MaxPower,I32:Error=Laser.GetMaxPower(str:Name)"
    },
    {
      "Name": "Laser.GetMinDiameter",
      "Synopsis": "num:MinDiameter,I32:Error=Laser.GetMinDiameter(str:Name)"
    },
    {
      "Name": "Laser.GetMinPower",
      "Synopsis": "num:MinPower,I32:Error=Laser.GetMinPower(str:Name)"
    },
    {
      "Name": "Laser.GetOffDelay",
      "Synopsis": "num:OffDelay,I32:Error=Laser.GetOffDelay(str:Name)"
    },
    {
      "Name": "Laser.GetOnDelay",
      "Synopsis": "num:OnDelay,I32:Error=Laser.GetOnDelay(str:Name)"
    },
    {
      "Name": "Laser.GetPower",
      "Synopsis": "num:Power,I32:Error=Laser.GetPower(str:Name)"
    },
    {
      "Name": "Laser.GetPowerCalibration",
      "Synopsis": "tab:CalibrationData,I32:Error=Laser.GetPowerCalibration(str:Name)"
    },
    {
      "Name": "Laser.ListChannels",
      "Synopsis": "tab:ChannelList,I32:Error=Laser.ListChannels(str:Name)"
    },
    {
      "Name": "Laser.SetDiameterCalibration",
      "Synopsis": "I32:Error=Laser.SetDiameterCalibration(str:Name,tab:CalibrationData)"
    },
    {
      "Name": "Laser.SetGate",
      "Synopsis": "I32:Error=Laser.SetGate(str:Name,bool:Gate)"
    },
    {
      "Name": "Laser.SetMaxDiameter",
      "Synopsis": "I32:Error=Laser.SetMaxDiameter(str:Name,num:MaxDiameter)"
    },
    {
      "Name": "Laser.SetMaxPower",
      "Synopsis": "I32:Error=Laser.SetMaxPower(str:Name,num:MaxPower)"
    },
    {
      "Name": "Laser.SetMinDiameter",
      "Synopsis": "I32:Error=Laser.SetMinDiameter(str:Name,num:MinDiameter)"
    },
    {
      "Name": "Laser.SetMinPower",
      "Synopsis": "I32:Error=Laser.SetMinPower(str:Name,num:MinPower)"
    },
    {
      "Name": "Laser.SetOffDelay",
      "Synopsis": "I32:Error=Laser.SetOffDelay(str:Name,num:OffDelay)"
    },
    {
      "Name": "Laser.SetOnDelay",
      "Synopsis": "I32:Error=Laser.SetOnDelay(str:Name,num:OnDelay)"
    },
    {
      "Name": "Laser.SetPower",
      "Synopsis": "I32:Error=Laser.SetPower(str:Name,num:Power,[bool:LON])"
    },
    {
      "Name": "Laser.SetPowerCalibration",
      "Synopsis": "I32:Error=Laser.SetPowerCalibration(str:Name,tab:CalibrationData)"
    },
    {
      "Name": "Laser.StartTimedShot",
      "Synopsis": "I32:Error=Laser.StartTimedShot(str:Name,num:Time)"
    },
    {
      "Name": "Laser.StopTimedShot",
      "Synopsis": "I32:Error=Laser.StopTimedShot(str:Name)"
    },
    {
      "Name": "LaserObject.Get",
      "Synopsis": "obj:LaserObject=LaserObject.Get(str:Name)"
    },
    {
      "Name": "LaserObject.Release",
      "Synopsis": "LaserObject.Release(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.StartTimedShot",
      "Synopsis": "LaserObject.StartTimedShot(obj:LaserObject,num:Time)"
    },
    {
      "Name": "LaserObject.StopTimedShot",
      "Synopsis": "LaserObject.StopTimedShot(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetPower",
      "Synopsis": "LaserObject.SetPower(obj:LaserObject,num:Power)"
    },
    {
      "Name": "LaserObject.GetPower",
      "Synopsis": "num:Power=LaserObject.GetPower(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetDiameter",
      "Synopsis": "LaserObject.SetDiameter(obj:LaserObject,num:Diameter)"
    },
    {
      "Name": "LaserObject.GetDiameter",
      "Synopsis": "num:Diameter=LaserObject.GetDiameter(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetPowerCalibration",
      "Synopsis": "LaserObject.SetPowerCalibration(obj:LaserObject,tab:PowerCalibration)"
    },
    {
      "Name": "LaserObject.GetPowerCalibration",
      "Synopsis": "tab:PowerCalibration=LaserObject.GetPowerCalibration(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetDiameterCalibration",
      "Synopsis": "LaserObject.SetDiameterCalibration(obj:LaserObject,tab:DiameterCalibration)"
    },
    {
      "Name": "LaserObject.GetDiameterCalibration",
      "Synopsis": "tab:DiameterCalibration=LaserObject.GetDiameterCalibration(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.Configure",
      "Synopsis": "LaserObject.Configure(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.GetGUID",
      "Synopsis": "any:PropertyValue=LaserObject.GetGUID(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetGUID",
      "Synopsis": "LaserObject.SetGUID(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetName",
      "Synopsis": "any:PropertyValue=LaserObject.GetName(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetName",
      "Synopsis": "LaserObject.SetName(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetClass",
      "Synopsis": "any:PropertyValue=LaserObject.GetClass(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetClass",
      "Synopsis": "LaserObject.SetClass(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetOwner",
      "Synopsis": "any:PropertyValue=LaserObject.GetOwner(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetOwner",
      "Synopsis": "LaserObject.SetOwner(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetChannels",
      "Synopsis": "any:PropertyValue=LaserObject.GetChannels(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetChannels",
      "Synopsis": "LaserObject.SetChannels(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetIndex",
      "Synopsis": "any:PropertyValue=LaserObject.GetIndex(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetIndex",
      "Synopsis": "LaserObject.SetIndex(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetModulationType",
      "Synopsis": "any:PropertyValue=LaserObject.GetModulationType(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetModulationType",
      "Synopsis": "LaserObject.SetModulationType(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetPowerMax",
      "Synopsis": "any:PropertyValue=LaserObject.GetPowerMax(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetPowerMax",
      "Synopsis": "LaserObject.SetPowerMax(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetPowerMin",
      "Synopsis": "any:PropertyValue=LaserObject.GetPowerMin(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetPowerMin",
      "Synopsis": "LaserObject.SetPowerMin(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetDiameterMax",
      "Synopsis": "any:PropertyValue=LaserObject.GetDiameterMax(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetDiameterMax",
      "Synopsis": "LaserObject.SetDiameterMax(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetDiameterMin",
      "Synopsis": "any:PropertyValue=LaserObject.GetDiameterMin(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetDiameterMin",
      "Synopsis": "LaserObject.SetDiameterMin(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetGateOnDelay",
      "Synopsis": "any:PropertyValue=LaserObject.GetGateOnDelay(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetGateOnDelay",
      "Synopsis": "LaserObject.SetGateOnDelay(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetGateOffDelay",
      "Synopsis": "any:PropertyValue=LaserObject.GetGateOffDelay(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetGateOffDelay",
      "Synopsis": "LaserObject.SetGateOffDelay(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetModulationOnDelay",
      "Synopsis": "any:PropertyValue=LaserObject.GetModulationOnDelay(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetModulationOnDelay",
      "Synopsis": "LaserObject.SetModulationOnDelay(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetModulationOffDelay",
      "Synopsis": "any:PropertyValue=LaserObject.GetModulationOffDelay(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetModulationOffDelay",
      "Synopsis": "LaserObject.SetModulationOffDelay(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetFPSOnDelay",
      "Synopsis": "any:PropertyValue=LaserObject.GetFPSOnDelay(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetFPSOnDelay",
      "Synopsis": "LaserObject.SetFPSOnDelay(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetFPSOffDelay",
      "Synopsis": "any:PropertyValue=LaserObject.GetFPSOffDelay(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetFPSOffDelay",
      "Synopsis": "LaserObject.SetFPSOffDelay(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LaserObject.GetHoldModulation",
      "Synopsis": "any:PropertyValue=LaserObject.GetHoldModulation(obj:LaserObject)"
    },
    {
      "Name": "LaserObject.SetHoldModulation",
      "Synopsis": "LaserObject.SetHoldModulation(obj:LaserObject,any:PropertyValue)"
    },
    {
      "Name": "LayerObject.Create",
      "Synopsis": "obj:LayerObject=LayerObject.Create()"
    },
    {
      "Name": "LayerObject.Destroy",
      "Synopsis": "LayerObject.Destroy(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.Release",
      "Synopsis": "LayerObject.Release(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetDataBlock",
      "Synopsis": "obj:DataBlockObject=LayerObject.GetDataBlock(obj:LayerObject,I32:DataBlockIndex)"
    },
    {
      "Name": "LayerObject.GetDataBlocks",
      "Synopsis": "[obj:DataBlockObject]=LayerObject.GetDataBlocks(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetIndex",
      "Synopsis": "I32:Index=LayerObject.GetIndex(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetScanTime",
      "Synopsis": "num:ScanTime=LayerObject.GetScanTime(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetTotalJumpDistance",
      "Synopsis": "num:TotalJumpDistance=LayerObject.GetTotalJumpDistance(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetTotalMarkDistance",
      "Synopsis": "num:TotalMarkDistance=LayerObject.GetTotalMarkDistance(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetXMax",
      "Synopsis": "num:XMax=LayerObject.GetXMax(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetXMin",
      "Synopsis": "num:XMin=LayerObject.GetXMin(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetYMax",
      "Synopsis": "num:YMax=LayerObject.GetYMax(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetYMin",
      "Synopsis": "num:YMin=LayerObject.GetYMin(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.GetZ",
      "Synopsis": "num:Z=LayerObject.GetZ(obj:LayerObject)"
    },
    {
      "Name": "LayerObject.Unload",
      "Synopsis": "LayerObject.Unload(obj:LayerObject)"
    },
    {
      "Name": "ModbusObject.Close",
      "Synopsis": "ModbusObject.Close(obj:ModbusObject)"
    },
    {
      "Name": "ModbusObject.GetAll",
      "Synopsis": "[obj:ModbusObject]=ModbusObject.GetAll()"
    },
    {
      "Name": "ModbusObject.GetByName",
      "Synopsis": "obj:ModbusObject=ModbusObject.GetByName(str:SessionName)"
    },
    {
      "Name": "ModbusObject.OpenRS485",
      "Synopsis": "obj:ModbusObject,str:SessionName=ModbusObject.OpenRS485(str:COMPort,str:SerialType,U8:UnitID,U32:BaudRate,str:Parity,str:FlowControl,[str:SessionName])"
    },
    {
      "Name": "ModbusObject.OpenTCP",
      "Synopsis": "obj:ModbusObject,str:SessionName=ModbusObject.OpenTCP(str:IPAddress,U16:Port,[str:SessionName])"
    },
    {
      "Name": "ModbusObject.ReadCoils",
      "Synopsis": "tab:Coils=ModbusObject.ReadCoils(obj:ModbusObject,U16:StartAddress,U16:NumberOfCoils,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.ReadDI",
      "Synopsis": "tab:DigitalInputs=ModbusObject.ReadDI(obj:ModbusObject,U16:StartAddress,U16:NumberOfInputs,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.ReadExceptionStatus",
      "Synopsis": "U8:ExceptionCode=ModbusObject.ReadExceptionStatus(obj:ModbusObject,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.ReadHR",
      "Synopsis": "tab:HoldingRegisters=ModbusObject.ReadHR(obj:ModbusObject,U16:StartAddress,U16:NumberOfHoldingRegisters,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.ReadIR",
      "Synopsis": "tab:InputRegisters=ModbusObject.ReadIR(obj:ModbusObject,U16:StartAddress,U16:NumberOfInputRegisters,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.Release",
      "Synopsis": "ModbusObject.Release(obj:ModbusObject)"
    },
    {
      "Name": "ModbusObject.RWMultipleHR",
      "Synopsis": "tab:HoldingRegisters=ModbusObject.RWMultipleHR(obj:ModbusObject,U16:WriteStartAddress,tab:HoldingRegisters,U16:ReadStartAddress,U16:NumberOfRegisters,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.SetTimeouts",
      "Synopsis": "ModbusObject.SetTimeouts(obj:ModbusObject,U32:ReadTimeOut,U32:WriteTimeOut)"
    },
    {
      "Name": "ModbusObject.SetUnitID",
      "Synopsis": "ModbusObject.SetUnitID(obj:ModbusObject,U8:UnitID)"
    },
    {
      "Name": "ModbusObject.WriteMultipleCoils",
      "Synopsis": "ModbusObject.WriteMultipleCoils(obj:ModbusObject,U16:StartAddress,tab:Coils,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.WriteMultipleHR",
      "Synopsis": "ModbusObject.WriteMultipleHR(obj:ModbusObject,U16:StartAddress,tab:HoldingRegisters,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.WriteSingleCoil",
      "Synopsis": "ModbusObject.WriteSingleCoil(obj:ModbusObject,U16:Address,bool:Coil,[U8:UnitID])"
    },
    {
      "Name": "ModbusObject.WriteSingleHR",
      "Synopsis": "ModbusObject.WriteSingleHR(obj:ModbusObject,U16:Address,U16:HoldingRegister,[U8:UnitID])"
    },
    {
      "Name": "ModuleObject.Get",
      "Synopsis": "obj:ModuleObject=ModuleObject.Get(str:Name)"
    },
    {
      "Name": "ModuleObject.Release",
      "Synopsis": "ModuleObject.Release(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.GetGUID",
      "Synopsis": "any:PropertyValue=ModuleObject.GetGUID(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetGUID",
      "Synopsis": "ModuleObject.SetGUID(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetName",
      "Synopsis": "any:PropertyValue=ModuleObject.GetName(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetName",
      "Synopsis": "ModuleObject.SetName(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetClass",
      "Synopsis": "any:PropertyValue=ModuleObject.GetClass(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetClass",
      "Synopsis": "ModuleObject.SetClass(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetOwner",
      "Synopsis": "any:PropertyValue=ModuleObject.GetOwner(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetOwner",
      "Synopsis": "ModuleObject.SetOwner(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetSlotNumber",
      "Synopsis": "any:PropertyValue=ModuleObject.GetSlotNumber(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetSlotNumber",
      "Synopsis": "ModuleObject.SetSlotNumber(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetSampleRate",
      "Synopsis": "any:PropertyValue=ModuleObject.GetSampleRate(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetSampleRate",
      "Synopsis": "ModuleObject.SetSampleRate(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetSerialNumber",
      "Synopsis": "any:PropertyValue=ModuleObject.GetSerialNumber(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetSerialNumber",
      "Synopsis": "ModuleObject.SetSerialNumber(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ModuleObject.GetChannels",
      "Synopsis": "any:PropertyValue=ModuleObject.GetChannels(obj:ModuleObject)"
    },
    {
      "Name": "ModuleObject.SetChannels",
      "Synopsis": "ModuleObject.SetChannels(obj:ModuleObject,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.Get",
      "Synopsis": "obj:MTLS0004Object=MTLS0004Object.Get(str:Name)"
    },
    {
      "Name": "MTLS0004Object.Release",
      "Synopsis": "MTLS0004Object.Release(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.GetFeedback",
      "Synopsis": "tab:Feedback=MTLS0004Object.GetFeedback(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetFeedback",
      "Synopsis": "MTLS0004Object.SetFeedback(obj:MTLS0004Object,tab:Feedback)"
    },
    {
      "Name": "MTLS0004Object.ConfigureModule",
      "Synopsis": "MTLS0004Object.ConfigureModule(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.ConfigureMMR",
      "Synopsis": "MTLS0004Object.ConfigureMMR(obj:MTLS0004Object,U8:Index,tab:MMRequest)"
    },
    {
      "Name": "MTLS0004Object.SetInterfaceConfiguration",
      "Synopsis": "MTLS0004Object.SetInterfaceConfiguration(obj:MTLS0004Object,tab:InterfaceConfiguration)"
    },
    {
      "Name": "MTLS0004Object.GetGUID",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetGUID(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetGUID",
      "Synopsis": "MTLS0004Object.SetGUID(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetName",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetName(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetName",
      "Synopsis": "MTLS0004Object.SetName(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetClass",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetClass(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetClass",
      "Synopsis": "MTLS0004Object.SetClass(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetOwner",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetOwner(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetOwner",
      "Synopsis": "MTLS0004Object.SetOwner(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetSlotNumber",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetSlotNumber(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetSlotNumber",
      "Synopsis": "MTLS0004Object.SetSlotNumber(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetSampleRate",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetSampleRate(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetSampleRate",
      "Synopsis": "MTLS0004Object.SetSampleRate(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetSerialNumber",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetSerialNumber(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetSerialNumber",
      "Synopsis": "MTLS0004Object.SetSerialNumber(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetChannels",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetChannels(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetChannels",
      "Synopsis": "MTLS0004Object.SetChannels(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetGridSize",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetGridSize(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetGridSize",
      "Synopsis": "MTLS0004Object.SetGridSize(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKx",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKx(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKx",
      "Synopsis": "MTLS0004Object.SetKx(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKy",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKy(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKy",
      "Synopsis": "MTLS0004Object.SetKy(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKz0",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKz0(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKz0",
      "Synopsis": "MTLS0004Object.SetKz0(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKz1",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKz1(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKz1",
      "Synopsis": "MTLS0004Object.SetKz1(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKd0",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKd0(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKd0",
      "Synopsis": "MTLS0004Object.SetKd0(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKd1",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKd1(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKd1",
      "Synopsis": "MTLS0004Object.SetKd1(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKp0",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKp0(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKp0",
      "Synopsis": "MTLS0004Object.SetKp0(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKp1",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKp1(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKp1",
      "Synopsis": "MTLS0004Object.SetKp1(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetKv",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetKv(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetKv",
      "Synopsis": "MTLS0004Object.SetKv(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetSwapX_Y",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetSwapX_Y(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetSwapX_Y",
      "Synopsis": "MTLS0004Object.SetSwapX_Y(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetSwapZ0_Z1",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetSwapZ0_Z1(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetSwapZ0_Z1",
      "Synopsis": "MTLS0004Object.SetSwapZ0_Z1(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "MTLS0004Object.GetInterfaceType",
      "Synopsis": "any:PropertyValue=MTLS0004Object.GetInterfaceType(obj:MTLS0004Object)"
    },
    {
      "Name": "MTLS0004Object.SetInterfaceType",
      "Synopsis": "MTLS0004Object.SetInterfaceType(obj:MTLS0004Object,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.Create",
      "Synopsis": "obj:ParametersetObject=ParametersetObject.Create()"
    },
    {
      "Name": "ParametersetObject.Release",
      "Synopsis": "ParametersetObject.Release(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.Destroy",
      "Synopsis": "ParametersetObject.Destroy(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.GetName",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetName(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetName",
      "Synopsis": "ParametersetObject.SetName(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetAcceleration",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetAcceleration(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetAcceleration",
      "Synopsis": "ParametersetObject.SetAcceleration(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetD0",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetD0(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetD0",
      "Synopsis": "ParametersetObject.SetD0(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetD1",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetD1(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetD1",
      "Synopsis": "ParametersetObject.SetD1(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetIndex",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetIndex(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetIndex",
      "Synopsis": "ParametersetObject.SetIndex(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetJumpDelay",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetJumpDelay(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetJumpDelay",
      "Synopsis": "ParametersetObject.SetJumpDelay(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetJumpSpeed",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetJumpSpeed(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetJumpSpeed",
      "Synopsis": "ParametersetObject.SetJumpSpeed(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetLON0",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetLON0(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetLON0",
      "Synopsis": "ParametersetObject.SetLON0(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetLON1",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetLON1(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetLON1",
      "Synopsis": "ParametersetObject.SetLON1(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetAngleThreshold",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetAngleThreshold(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetAngleThreshold",
      "Synopsis": "ParametersetObject.SetAngleThreshold(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetMarkDelay",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetMarkDelay(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetMarkDelay",
      "Synopsis": "ParametersetObject.SetMarkDelay(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetMarkSpeed",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetMarkSpeed(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetMarkSpeed",
      "Synopsis": "ParametersetObject.SetMarkSpeed(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetMethod",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetMethod(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetMethod",
      "Synopsis": "ParametersetObject.SetMethod(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetP0",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetP0(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetP0",
      "Synopsis": "ParametersetObject.SetP0(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetP1",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetP1(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetP1",
      "Synopsis": "ParametersetObject.SetP1(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetPolygonDelay",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetPolygonDelay(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetPolygonDelay",
      "Synopsis": "ParametersetObject.SetPolygonDelay(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ParametersetObject.GetZDelay",
      "Synopsis": "any:PropertyValue=ParametersetObject.GetZDelay(obj:ParametersetObject)"
    },
    {
      "Name": "ParametersetObject.SetZDelay",
      "Synopsis": "ParametersetObject.SetZDelay(obj:ParametersetObject,any:PropertyValue)"
    },
    {
      "Name": "ProjectItemObject.Get",
      "Synopsis": "obj:ProjectItemObject=ProjectItemObject.Get(str:Name,[str:Type])"
    },
    {
      "Name": "ProjectItemObject.Release",
      "Synopsis": "ProjectItemObject.Release(obj:ProjectItemObject)"
    },
    {
      "Name": "ProjectItemObject.ToMoreSpecific",
      "Synopsis": "obj:ProjectItemObject=ProjectItemObject.ToMoreSpecific(obj:ProjectItemObject,str:Type)"
    },
    {
      "Name": "ProjectItemObject.GetOwner",
      "Synopsis": "str:GUID=ProjectItemObject.GetOwner(obj:ProjectItemObject)"
    },
    {
      "Name": "ProjectItemObject.List",
      "Synopsis": "tab:Objects=ProjectItemObject.List([str:ClassName])"
    },
    {
      "Name": "ProjectItemObject.GetGUID",
      "Synopsis": "any:PropertyValue=ProjectItemObject.GetGUID(obj:ProjectItemObject)"
    },
    {
      "Name": "ProjectItemObject.SetGUID",
      "Synopsis": "ProjectItemObject.SetGUID(obj:ProjectItemObject,any:PropertyValue)"
    },
    {
      "Name": "ProjectItemObject.GetName",
      "Synopsis": "any:PropertyValue=ProjectItemObject.GetName(obj:ProjectItemObject)"
    },
    {
      "Name": "ProjectItemObject.SetName",
      "Synopsis": "ProjectItemObject.SetName(obj:ProjectItemObject,any:PropertyValue)"
    },
    {
      "Name": "ProjectItemObject.GetClass",
      "Synopsis": "any:PropertyValue=ProjectItemObject.GetClass(obj:ProjectItemObject)"
    },
    {
      "Name": "ProjectItemObject.SetClass",
      "Synopsis": "ProjectItemObject.SetClass(obj:ProjectItemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.Get",
      "Synopsis": "obj:ScanFieldObject=ScanFieldObject.Get(str:ScanFieldName)"
    },
    {
      "Name": "ScanFieldObject.Release",
      "Synopsis": "ScanFieldObject.Release(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.ProcessDataBlock",
      "Synopsis": "ScanFieldObject.ProcessDataBlock(obj:ScanFieldObject,obj:DataBlockObject)"
    },
    {
      "Name": "ScanFieldObject.StartDataBlock",
      "Synopsis": "ScanFieldObject.StartDataBlock(obj:ScanFieldObject,I32:Index)"
    },
    {
      "Name": "ScanFieldObject.Abort",
      "Synopsis": "ScanFieldObject.Abort(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.Home",
      "Synopsis": "ScanFieldObject.Home(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.GoToXY",
      "Synopsis": "ScanFieldObject.GoToXY(obj:ScanFieldObject,num:X,num:Y,[num:Speed])"
    },
    {
      "Name": "ScanFieldObject.GoToZ0",
      "Synopsis": "ScanFieldObject.GoToZ0(obj:ScanFieldObject,num:Z0)"
    },
    {
      "Name": "ScanFieldObject.GoToZ1",
      "Synopsis": "ScanFieldObject.GoToZ1(obj:ScanFieldObject,num:Z1)"
    },
    {
      "Name": "ScanFieldObject.GetGUID",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetGUID(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetGUID",
      "Synopsis": "ScanFieldObject.SetGUID(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetName",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetName(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetName",
      "Synopsis": "ScanFieldObject.SetName(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetClass",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetClass(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetClass",
      "Synopsis": "ScanFieldObject.SetClass(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetOwner",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetOwner(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetOwner",
      "Synopsis": "ScanFieldObject.SetOwner(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetChannels",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetChannels(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetChannels",
      "Synopsis": "ScanFieldObject.SetChannels(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetIndex",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetIndex(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetIndex",
      "Synopsis": "ScanFieldObject.SetIndex(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetX",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetX(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetX",
      "Synopsis": "ScanFieldObject.SetX(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetY",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetY(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetY",
      "Synopsis": "ScanFieldObject.SetY(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetRotation",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetRotation(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetRotation",
      "Synopsis": "ScanFieldObject.SetRotation(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetXOffset",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetXOffset(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetXOffset",
      "Synopsis": "ScanFieldObject.SetXOffset(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetYOffset",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetYOffset(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetYOffset",
      "Synopsis": "ScanFieldObject.SetYOffset(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetRotationOffset",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetRotationOffset(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetRotationOffset",
      "Synopsis": "ScanFieldObject.SetRotationOffset(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetOffset",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetOffset(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetOffset",
      "Synopsis": "ScanFieldObject.SetOffset(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetXMax",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetXMax(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetXMax",
      "Synopsis": "ScanFieldObject.SetXMax(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetXMin",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetXMin(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetXMin",
      "Synopsis": "ScanFieldObject.SetXMin(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetYMax",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetYMax(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetYMax",
      "Synopsis": "ScanFieldObject.SetYMax(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetYMin",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetYMin(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetYMin",
      "Synopsis": "ScanFieldObject.SetYMin(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetZ0Max",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetZ0Max(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetZ0Max",
      "Synopsis": "ScanFieldObject.SetZ0Max(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetZ0Min",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetZ0Min(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetZ0Min",
      "Synopsis": "ScanFieldObject.SetZ0Min(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetZ1Max",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetZ1Max(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetZ1Max",
      "Synopsis": "ScanFieldObject.SetZ1Max(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetZ1Min",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetZ1Min(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetZ1Min",
      "Synopsis": "ScanFieldObject.SetZ1Min(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetVMax",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetVMax(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetVMax",
      "Synopsis": "ScanFieldObject.SetVMax(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetVMin",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetVMin(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetVMin",
      "Synopsis": "ScanFieldObject.SetVMin(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetXHome",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetXHome(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetXHome",
      "Synopsis": "ScanFieldObject.SetXHome(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetYHome",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetYHome(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetYHome",
      "Synopsis": "ScanFieldObject.SetYHome(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetZ0Home",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetZ0Home(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetZ0Home",
      "Synopsis": "ScanFieldObject.SetZ0Home(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetZ1Home",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetZ1Home(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetZ1Home",
      "Synopsis": "ScanFieldObject.SetZ1Home(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetRref",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetRref(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetRref",
      "Synopsis": "ScanFieldObject.SetRref(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetB",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetB(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetB",
      "Synopsis": "ScanFieldObject.SetB(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetC",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetC(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetC",
      "Synopsis": "ScanFieldObject.SetC(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetLasers",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetLasers(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetLasers",
      "Synopsis": "ScanFieldObject.SetLasers(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanFieldObject.GetScanModuleReference",
      "Synopsis": "any:PropertyValue=ScanFieldObject.GetScanModuleReference(obj:ScanFieldObject)"
    },
    {
      "Name": "ScanFieldObject.SetScanModuleReference",
      "Synopsis": "ScanFieldObject.SetScanModuleReference(obj:ScanFieldObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.Get",
      "Synopsis": "obj:ScanModuleObject=ScanModuleObject.Get(str:Name)"
    },
    {
      "Name": "ScanModuleObject.Release",
      "Synopsis": "ScanModuleObject.Release(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SendCommand",
      "Synopsis": "ScanModuleObject.SendCommand(obj:ScanModuleObject,str:Axis,U16:Command)"
    },
    {
      "Name": "ScanModuleObject.SendIDriveCommand",
      "Synopsis": "ScanModuleObject.SendIDriveCommand(obj:ScanModuleObject,str:Axis,str:Command,U8:Data)"
    },
    {
      "Name": "ScanModuleObject.SendIDriveFeedbackMode",
      "Synopsis": "ScanModuleObject.SendIDriveFeedbackMode(obj:ScanModuleObject,str:Axis,str:FeedbackMode)"
    },
    {
      "Name": "ScanModuleObject.SetPointTrajectories",
      "Synopsis": "ScanModuleObject.SetPointTrajectories(obj:ScanModuleObject,str:Axis,tab:Points)"
    },
    {
      "Name": "ScanModuleObject.Send1DFile",
      "Synopsis": "ScanModuleObject.Send1DFile(obj:ScanModuleObject,str:Axis,str:FilePath,[num:scale])"
    },
    {
      "Name": "ScanModuleObject.Send2DFile",
      "Synopsis": "ScanModuleObject.Send2DFile(obj:ScanModuleObject,str:FilePath,[num:Scale])"
    },
    {
      "Name": "ScanModuleObject.GetGUID",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetGUID(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetGUID",
      "Synopsis": "ScanModuleObject.SetGUID(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetName",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetName(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetName",
      "Synopsis": "ScanModuleObject.SetName(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetClass",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetClass(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetClass",
      "Synopsis": "ScanModuleObject.SetClass(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetOwner",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetOwner(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetOwner",
      "Synopsis": "ScanModuleObject.SetOwner(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetSlotNumber",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetSlotNumber(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetSlotNumber",
      "Synopsis": "ScanModuleObject.SetSlotNumber(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetSampleRate",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetSampleRate(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetSampleRate",
      "Synopsis": "ScanModuleObject.SetSampleRate(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetSerialNumber",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetSerialNumber(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetSerialNumber",
      "Synopsis": "ScanModuleObject.SetSerialNumber(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetChannels",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetChannels(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetChannels",
      "Synopsis": "ScanModuleObject.SetChannels(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetGridSize",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetGridSize(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetGridSize",
      "Synopsis": "ScanModuleObject.SetGridSize(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKx",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKx(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKx",
      "Synopsis": "ScanModuleObject.SetKx(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKy",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKy(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKy",
      "Synopsis": "ScanModuleObject.SetKy(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKz0",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKz0(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKz0",
      "Synopsis": "ScanModuleObject.SetKz0(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKz1",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKz1(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKz1",
      "Synopsis": "ScanModuleObject.SetKz1(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKd0",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKd0(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKd0",
      "Synopsis": "ScanModuleObject.SetKd0(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKd1",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKd1(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKd1",
      "Synopsis": "ScanModuleObject.SetKd1(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKp0",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKp0(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKp0",
      "Synopsis": "ScanModuleObject.SetKp0(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKp1",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKp1(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKp1",
      "Synopsis": "ScanModuleObject.SetKp1(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetKv",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetKv(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetKv",
      "Synopsis": "ScanModuleObject.SetKv(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetSwapX_Y",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetSwapX_Y(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetSwapX_Y",
      "Synopsis": "ScanModuleObject.SetSwapX_Y(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanModuleObject.GetSwapZ0_Z1",
      "Synopsis": "any:PropertyValue=ScanModuleObject.GetSwapZ0_Z1(obj:ScanModuleObject)"
    },
    {
      "Name": "ScanModuleObject.SetSwapZ0_Z1",
      "Synopsis": "ScanModuleObject.SetSwapZ0_Z1(obj:ScanModuleObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.Get",
      "Synopsis": "obj:ScanSystemObject=ScanSystemObject.Get(str:Name)"
    },
    {
      "Name": "ScanSystemObject.Release",
      "Synopsis": "ScanSystemObject.Release(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.LoadJob",
      "Synopsis": "ScanSystemObject.LoadJob(obj:ScanSystemObject,str:JobPath)"
    },
    {
      "Name": "ScanSystemObject.Abort",
      "Synopsis": "ScanSystemObject.Abort(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.CloseJob",
      "Synopsis": "ScanSystemObject.CloseJob(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.ScanTimeEstimation",
      "Synopsis": "ScanSystemObject.ScanTimeEstimation(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.LoadLayer",
      "Synopsis": "obj:LayerObject=ScanSystemObject.LoadLayer(obj:ScanSystemObject,I32:LayerIndex,[bool:LoadDatablocks])"
    },
    {
      "Name": "ScanSystemObject.ScanLayer",
      "Synopsis": "ScanSystemObject.ScanLayer(obj:ScanSystemObject,[I32:LayerIndex])"
    },
    {
      "Name": "ScanSystemObject.GetDefaultParameterSet",
      "Synopsis": "obj:Parameterset=ScanSystemObject.GetDefaultParameterSet(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.GetGUID",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetGUID(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetGUID",
      "Synopsis": "ScanSystemObject.SetGUID(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetName",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetName(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetName",
      "Synopsis": "ScanSystemObject.SetName(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetClass",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetClass(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetClass",
      "Synopsis": "ScanSystemObject.SetClass(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetOwner",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetOwner(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetOwner",
      "Synopsis": "ScanSystemObject.SetOwner(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetChannels",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetChannels(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetChannels",
      "Synopsis": "ScanSystemObject.SetChannels(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetJobFileLocation",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetJobFileLocation(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetJobFileLocation",
      "Synopsis": "ScanSystemObject.SetJobFileLocation(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetXMax",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetXMax(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetXMax",
      "Synopsis": "ScanSystemObject.SetXMax(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetXMin",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetXMin(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetXMin",
      "Synopsis": "ScanSystemObject.SetXMin(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetYMax",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetYMax(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetYMax",
      "Synopsis": "ScanSystemObject.SetYMax(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetYMin",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetYMin(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetYMin",
      "Synopsis": "ScanSystemObject.SetYMin(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetZMax",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetZMax(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetZMax",
      "Synopsis": "ScanSystemObject.SetZMax(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetZMin",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetZMin(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetZMin",
      "Synopsis": "ScanSystemObject.SetZMin(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetScanFields",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetScanFields(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetScanFields",
      "Synopsis": "ScanSystemObject.SetScanFields(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetParametersets",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetParametersets(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetParametersets",
      "Synopsis": "ScanSystemObject.SetParametersets(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetJob",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetJob(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetJob",
      "Synopsis": "ScanSystemObject.SetJob(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "ScanSystemObject.GetScanTimeEstimation",
      "Synopsis": "any:PropertyValue=ScanSystemObject.GetScanTimeEstimation(obj:ScanSystemObject)"
    },
    {
      "Name": "ScanSystemObject.SetScanTimeEstimation",
      "Synopsis": "ScanSystemObject.SetScanTimeEstimation(obj:ScanSystemObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.Get",
      "Synopsis": "obj:TargetObject=TargetObject.Get(str:Name)"
    },
    {
      "Name": "TargetObject.Release",
      "Synopsis": "TargetObject.Release(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.GetGUID",
      "Synopsis": "any:PropertyValue=TargetObject.GetGUID(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetGUID",
      "Synopsis": "TargetObject.SetGUID(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetName",
      "Synopsis": "any:PropertyValue=TargetObject.GetName(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetName",
      "Synopsis": "TargetObject.SetName(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetClass",
      "Synopsis": "any:PropertyValue=TargetObject.GetClass(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetClass",
      "Synopsis": "TargetObject.SetClass(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetOwner",
      "Synopsis": "any:PropertyValue=TargetObject.GetOwner(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetOwner",
      "Synopsis": "TargetObject.SetOwner(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetAddress",
      "Synopsis": "any:PropertyValue=TargetObject.GetAddress(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetAddress",
      "Synopsis": "TargetObject.SetAddress(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetMaster",
      "Synopsis": "any:PropertyValue=TargetObject.GetMaster(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetMaster",
      "Synopsis": "TargetObject.SetMaster(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetSerialNumber",
      "Synopsis": "any:PropertyValue=TargetObject.GetSerialNumber(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetSerialNumber",
      "Synopsis": "TargetObject.SetSerialNumber(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetFPGA",
      "Synopsis": "any:PropertyValue=TargetObject.GetFPGA(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetFPGA",
      "Synopsis": "TargetObject.SetFPGA(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TargetObject.GetModules",
      "Synopsis": "any:PropertyValue=TargetObject.GetModules(obj:TargetObject)"
    },
    {
      "Name": "TargetObject.SetModules",
      "Synopsis": "TargetObject.SetModules(obj:TargetObject,any:PropertyValue)"
    },
    {
      "Name": "TCP.Open",
      "Synopsis": "obj:TCP=TCP.Open(str:Address,U16:RemotePort,I32:Timeout,[U16:LocalPort])"
    },
    {
      "Name": "TCP.Release",
      "Synopsis": "TCP.Release(obj:TCP)"
    },
    {
      "Name": "TCP.Close",
      "Synopsis": "TCP.Close(obj:TCP)"
    },
    {
      "Name": "TimerObject.Create",
      "Synopsis": "obj:TimerObject=TimerObject.Create([str:Name])"
    },
    {
      "Name": "TimerObject.Destroy",
      "Synopsis": "TimerObject.Destroy(obj:TimerObject)"
    },
    {
      "Name": "TimerObject.GetElapsedTime",
      "Synopsis": "num:ElapsedTime=TimerObject.GetElapsedTime(obj:TimerObject)"
    },
    {
      "Name": "TimerObject.GetRemainingTime",
      "Synopsis": "num:RemainingTime=TimerObject.GetRemainingTime(obj:TimerObject)"
    },
    {
      "Name": "TimerObject.Pause",
      "Synopsis": "TimerObject.Pause(obj:TimerObject)"
    },
    {
      "Name": "TimerObject.Release",
      "Synopsis": "TimerObject.Release(obj:TimerObject)"
    },
    {
      "Name": "TimerObject.Reset",
      "Synopsis": "TimerObject.Reset(obj:TimerObject,[num:Interval])"
    },
    {
      "Name": "TimerObject.Start",
      "Synopsis": "TimerObject.Start(obj:TimerObject,num:Interval)"
    },
    {
      "Name": "TimerObject.Stop",
      "Synopsis": "TimerObject.Stop(obj:TimerObject)"
    },
    {
      "Name": "TimerObject.TriggerEvent",
      "Synopsis": "TimerObject.TriggerEvent(obj:TimerObject)"
    },
    {
      "Name": "UDP.Close",
      "Synopsis": "I32:Error=UDP.Close(ref:UDPSocket)"
    },
    {
      "Name": "UDP.Open",
      "Synopsis": "ref:UDPSocket,U16:Port,I32:Error=UDP.Open(U16:Port)"
    },
    {
      "Name": "UDP.Read",
      "Synopsis": "str:Address,U16:Port,str:Data,I32:Error=UDP.Read(ref:UDPSocket,I32:Size,I32:Timeout)"
    },
    {
      "Name": "UDP.Write",
      "Synopsis": "I32:Error=UDP.Write(ref:UDPSocket,str:Address,U16:Port,str:Data,I32:Timeout)"
    }
  ]
}